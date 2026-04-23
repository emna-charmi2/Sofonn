"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  Ship,
  Users,
  AlertTriangle,
  Plus,
  Pencil,
  Eye,
  XCircle,
  UserX,
  Search,
  Anchor,
  LayoutDashboard,
  BarChart3,
  CheckCircle,
  History,
  X,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Image as ImageIcon,
  Settings,
  LogOut,
} from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// 0. CONSTANTS & COLORS
// ============================================================
const SOLUTION = {
  name: ["IQ", "LOG", "ECO", "AI"],
  colors: ["#00b0ff", "#FFC700", "#45a894", "#e1294c"],
};

const getSolutionColor = (index: number) => SOLUTION.colors[index % SOLUTION.colors.length];
const primaryColor = SOLUTION.colors[0]; // #00b0ff
const secondaryColor = SOLUTION.colors[1]; // #FFC700
const accentGreen = SOLUTION.colors[2]; // #45a894
const alertRed = SOLUTION.colors[3]; // #e1294c

// ============================================================
// 1. TYPES & INTERFACES
// ============================================================
interface Master {
  id: string;
  user_id: string | null;
  name: string;
  ship_name: string;
  active: boolean;
  created_at: string;
}

interface Operation {
  id: string;
  master_id: string;
  ship_name: string;
  status: "in_progress" | "completed" | "cancelled";
  start_time: string;
  end_time: string | null;
  start_image_url: string | null;
  end_image_url: string | null;
  kpi_ia_start_empty: number | null;
  kpi_ia_start_filled: number | null;
  kpi_ia_end_empty: number | null;
  kpi_ia_end_filled: number | null;
  kpi_master_start_empty: number | null;
  kpi_master_start_filled: number | null;
  kpi_master_end_empty: number | null;
  kpi_master_end_filled: number | null;
  alert_triggered: boolean | null;
  alert_message: string | null;
  diff_threshold: number | null;
  created_at: string;
  masters?: { name: string; ship_name: string } | null;
}

interface ManagementPageProps {
  masters: Master[];
  ships: string[];
  addMaster: (name: string, ship_name: string, email: string, password: string) => void;
  updateMaster: (id: string, name: string, ship_name: string, email?: string, password?: string) => void;
  deleteMaster: (id: string) => void;
  addShip: (shipName: string) => void;
  updateShip: (oldName: string, newName: string) => void;
  deleteShip: (shipName: string) => void;
}

// ============================================================
// 2. MOCK DATA
// ============================================================
const now = Date.now();
const hours = (h: number) => new Date(now - h * 3600_000).toISOString();
const days = (d: number) => new Date(now - d * 86400_000).toISOString();

const mockMasters: Master[] = [
  { id: "m1", user_id: "u1", name: "Jean Dupont", ship_name: "MV CargoStar", active: true, created_at: days(120) },
  { id: "m2", user_id: "u2", name: "Sophie Martin", ship_name: "MV OceanRunner", active: true, created_at: days(95) },
  { id: "m3", user_id: "u3", name: "Karim Benali", ship_name: "MV BlueWave", active: true, created_at: days(60) },
  { id: "m4", user_id: "u4", name: "Élise Moreau", ship_name: "MV NorthWind", active: true, created_at: days(40) },
  { id: "m5", user_id: "u5", name: "Marc Lefèvre", ship_name: "MV CargoStar", active: false, created_at: days(200) },
];

const mockOperations: Operation[] = [
  {
    id: "op1", master_id: "m1", ship_name: "MV CargoStar", status: "in_progress",
    start_time: hours(2), end_time: null,
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: null,
    kpi_ia_start_empty: 62.4, kpi_ia_start_filled: 37.6,
    kpi_ia_end_empty: null, kpi_ia_end_filled: null,
    kpi_master_start_empty: 60.0, kpi_master_start_filled: 40.0,
    kpi_master_end_empty: null, kpi_master_end_filled: null,
    alert_triggered: false, alert_message: null, diff_threshold: 15,
    created_at: hours(2),
    masters: { name: "Jean Dupont", ship_name: "MV CargoStar" },
  },
  {
    id: "op2", master_id: "m2", ship_name: "MV OceanRunner", status: "completed",
    start_time: hours(28), end_time: hours(20),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_ia_start_empty: 85.1, kpi_ia_start_filled: 14.9,
    kpi_ia_end_empty: 12.3, kpi_ia_end_filled: 87.7,
    kpi_master_start_empty: 88.0, kpi_master_start_filled: 12.0,
    kpi_master_end_empty: 6.0, kpi_master_end_filled: 94.0,
    alert_triggered: false, alert_message: null, diff_threshold: 15,
    created_at: hours(28),
    masters: { name: "Sophie Martin", ship_name: "MV OceanRunner" },
  },
  {
    id: "op3", master_id: "m3", ship_name: "MV BlueWave", status: "completed",
    start_time: days(2), end_time: days(2),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_ia_start_empty: 70.5, kpi_ia_start_filled: 29.5,
    kpi_ia_end_empty: 8.2, kpi_ia_end_filled: 91.8,
    kpi_master_start_empty: 50.0, kpi_master_start_filled: 50.0,
    kpi_master_end_empty: 30.0, kpi_master_end_filled: 70.0,
    alert_triggered: true,
    alert_message: "Gap of 21.8% detected between AI and master (threshold: 15%)",
    diff_threshold: 15,
    created_at: days(2),
    masters: { name: "Karim Benali", ship_name: "MV BlueWave" },
  },
  {
    id: "op4", master_id: "m1", ship_name: "MV CargoStar", status: "completed",
    start_time: days(3), end_time: days(3),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_ia_start_empty: 90.2, kpi_ia_start_filled: 9.8,
    kpi_ia_end_empty: 5.4, kpi_ia_end_filled: 94.6,
    kpi_master_start_empty: 88.0, kpi_master_start_filled: 12.0,
    kpi_master_end_empty: 6.0, kpi_master_end_filled: 94.0,
    alert_triggered: false, alert_message: null, diff_threshold: 15,
    created_at: days(3),
    masters: { name: "Jean Dupont", ship_name: "MV CargoStar" },
  },
  {
    id: "op5", master_id: "m4", ship_name: "MV NorthWind", status: "in_progress",
    start_time: hours(5), end_time: null,
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: null,
    kpi_ia_start_empty: 45.0, kpi_ia_start_filled: 55.0,
    kpi_ia_end_empty: null, kpi_ia_end_filled: null,
    kpi_master_start_empty: 48.0, kpi_master_start_filled: 52.0,
    kpi_master_end_empty: null, kpi_master_end_filled: null,
    alert_triggered: false, alert_message: null, diff_threshold: 15,
    created_at: hours(5),
    masters: { name: "Élise Moreau", ship_name: "MV NorthWind" },
  },
  {
    id: "op6", master_id: "m2", ship_name: "MV OceanRunner", status: "cancelled",
    start_time: days(5), end_time: days(5),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: null,
    kpi_ia_start_empty: 30.0, kpi_ia_start_filled: 70.0,
    kpi_ia_end_empty: null, kpi_ia_end_filled: null,
    kpi_master_start_empty: null, kpi_master_start_filled: null,
    kpi_master_end_empty: null, kpi_master_end_filled: null,
    alert_triggered: false, alert_message: null, diff_threshold: 15,
    created_at: days(5),
    masters: { name: "Sophie Martin", ship_name: "MV OceanRunner" },
  },
  {
    id: "op7", master_id: "m1", ship_name: "MV CargoStar", status: "completed",
    start_time: days(7), end_time: days(7),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_ia_start_empty: 75.8, kpi_ia_start_filled: 24.2,
    kpi_ia_end_empty: 18.5, kpi_ia_end_filled: 81.5,
    kpi_master_start_empty: 76.0, kpi_master_start_filled: 24.0,
    kpi_master_end_empty: 20.0, kpi_master_end_filled: 80.0,
    alert_triggered: false, alert_message: null, diff_threshold: 15,
    created_at: days(7),
    masters: { name: "Jean Dupont", ship_name: "MV CargoStar" },
  },
  {
    id: "op8", master_id: "m3", ship_name: "MV BlueWave", status: "completed",
    start_time: days(10), end_time: days(10),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_ia_start_empty: 55.2, kpi_ia_start_filled: 44.8,
    kpi_ia_end_empty: 22.0, kpi_ia_end_filled: 78.0,
    kpi_master_start_empty: 80.0, kpi_master_start_filled: 20.0,
    kpi_master_end_empty: 25.0, kpi_master_end_filled: 75.0,
    alert_triggered: true,
    alert_message: "Gap of 24.8% detected between AI and master (threshold: 15%)",
    diff_threshold: 15,
    created_at: days(10),
    masters: { name: "Karim Benali", ship_name: "MV BlueWave" },
  },
];

const evolutionData = [
  { day: "Mon", ia: 80, master: 90 },
  { day: "Tue", ia: 70, master: 80 },
  { day: "Wed", ia: 60, master: 70 },
  { day: "Thu", ia: 65, master: 75 },
  { day: "Fri", ia: 45, master: 55 },
  { day: "Sat", ia: 50, master: 65 },
  { day: "Sun", ia: 35, master: 45 },
];

const alerts = [
  {
    id: "ALT-001",
    vessel: "PSV-047",
    gap: 33,
    iaValue: "12%",
    masterValue: "45%",
    time: "11 min ago",
    status: "new",
    priority: "critical",
    beforeImage: "https://picsum.photos/id/1015/300/200",
    afterImage: "https://picsum.photos/id/1018/300/200",
    iaBeforePercent: 68,
    iaAfterPercent: 12,
    masterBeforePercent: 45,
    description: "Master entered 45% empty while AI detects 12%. Difference of 33% — Immediate verification required.",
  },
  {
    id: "ALT-002",
    vessel: "PSV Atlas Rover",
    gap: 15.1,
    iaValue: "85%",
    masterValue: "71%",
    time: "45 min ago",
    status: "under_audit",
    priority: "high",
    beforeImage: "https://picsum.photos/id/104/300/200",
    afterImage: "https://picsum.photos/id/107/300/200",
    iaBeforePercent: 85,
    iaAfterPercent: null,
    masterBeforePercent: 71,
    description: "Moderate gap between AI estimate (85% empty) and Master estimate (71% empty) — Verification recommended.",
  },
  {
    id: "ALT-003",
    vessel: "PSV Nordic Wind",
    gap: 12.4,
    iaValue: "78%",
    masterValue: "89%",
    time: "2h ago",
    status: "pending",
    priority: "medium",
    beforeImage: "https://picsum.photos/id/116/300/200",
    afterImage: "https://picsum.photos/id/119/300/200",
    iaBeforePercent: 78,
    iaAfterPercent: 22,
    masterBeforePercent: 89,
    description: "AI estimates more empty space than Master. Monitor closely.",
  },
];

// ============================================================
// 3. CUSTOM HOOKS
// ============================================================
function useOperations() {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOperations(mockOperations);
      setLoading(false);
    }, 300);
  }, []);
  return { operations, loading };
}

function useMasters() {
  const [masters, setMasters] = useState<Master[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMasters(mockMasters);
      setLoading(false);
    }, 300);
  }, []);

  const addMaster = async (name: string, shipName: string, email: string, password: string) => {
    const newMaster: Master = {
      id: Date.now().toString(),
      user_id: null,
      name,
      ship_name: shipName,
      active: true,
      created_at: new Date().toISOString(),
    };
    setMasters(prev => [...prev, newMaster]);
  };

  const updateMaster = async (id: string, name: string, shipName: string) => {
    setMasters(prev => prev.map(m => m.id === id ? { ...m, name, ship_name: shipName } : m));
  };

  // Suppression définitive (supprime l'élément du tableau)
  const deleteMasterPermanent = async (id: string) => {
    setMasters(prev => prev.filter(m => m.id !== id));
  };

  // Garder l'ancienne méthode si besoin (désactivation)
  const deleteMaster = async (id: string) => {
    setMasters(prev => prev.map(m => m.id === id ? { ...m, active: false } : m));
  };

  return { masters, loading, addMaster, updateMaster, deleteMaster: deleteMasterPermanent, setMasters };
}
// ============================================================
// 4. UI COMPONENTS
// ============================================================
function StatCard({ title, value, icon: Icon, subtitle }: { title: string; value: number; icon: any; subtitle?: string }) {
  const color = getSolutionColor(Math.abs(title.length) % SOLUTION.colors.length);
  return (
    <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 shadow-xl p-5 transition-all duration-300 hover:shadow-2xl hover:bg-white/40">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-medium text-gray-700">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
        </div>
        <div className="rounded-full p-3" style={{ backgroundColor: `${color}20`, color }}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

function OperationStatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; className: string }> = {
    in_progress: { label: "In Progress", className: "bg-amber-100/80 text-amber-800 backdrop-blur-sm" },
    completed: { label: "Completed", className: "bg-green-100/80 text-green-800 backdrop-blur-sm" },
    cancelled: { label: "Cancelled", className: "bg-red-100/80 text-red-800 backdrop-blur-sm" },
  };
  const c = config[status] ?? config.in_progress;
  return <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${c.className}`}>{c.label}</span>;
}

function KpiComparisonDetailed({ iaValue, masterValue, label }: { iaValue: number; masterValue: number; label: string }) {
  const diff = Math.abs(iaValue - masterValue);
  const isAlert = diff > 15;
  return (
    <div className="mb-6 bg-white/30 backdrop-blur-xl p-5 rounded-xl border border-white/50">
      <div className="flex justify-between mb-3">
        <span className="text-base font-bold text-gray-800">{label}</span>
        <span className={`text-sm px-3 py-1 rounded-full ${isAlert ? 'bg-red-500/20 text-red-600' : 'bg-green-500/20 text-green-700'}`}>
          GAP: {diff}% {isAlert && "⚠️"}
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1 font-bold text-blue-600 uppercase">
            <span>AI Model</span> <span>{iaValue}%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${iaValue}%` }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1 font-bold text-amber-600 uppercase">
            <span>Master Entry</span> <span>{masterValue}%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full transition-all duration-1000" style={{ width: `${masterValue}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 5. PAGE COMPONENTS
// ============================================================
function OperationsPage({
  operations,
  loading,
  onSelectOperation,
}: {
  operations: Operation[];
  loading: boolean;
  onSelectOperation: (op: Operation) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [masterFilter, setMasterFilter] = useState("all");
  const [shipFilter, setShipFilter] = useState("all");

  const uniqueMasters = Array.from(new Set(operations.map(op => op.masters?.name).filter(Boolean))) as string[];
  const uniqueShips = Array.from(new Set(operations.map(op => op.ship_name)));

  const filteredOps = operations.filter(op => {
    const matchesStatus = statusFilter === "all" || op.status === statusFilter;
    const matchesMaster = masterFilter === "all" || op.masters?.name === masterFilter;
    const matchesShip = shipFilter === "all" || op.ship_name === shipFilter;
    return matchesStatus && matchesMaster && matchesShip;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 items-end">
        <select
          className="rounded-lg border border-white/50 bg-white/30 backdrop-blur-xl px-3 py-2 focus:outline-none focus:ring-2 text-base"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <select
          className="rounded-lg border border-white/50 bg-white/30 backdrop-blur-xl px-3 py-2 focus:outline-none focus:ring-2 text-base"
          value={masterFilter}
          onChange={(e) => setMasterFilter(e.target.value)}
        >
          <option value="all">All Masters</option>
          {uniqueMasters.map(master => (
            <option key={master} value={master}>{master}</option>
          ))}
        </select>

        <select
          className="rounded-lg border border-white/50 bg-white/30 backdrop-blur-xl px-3 py-2 focus:outline-none focus:ring-2 text-base"
          value={shipFilter}
          onChange={(e) => setShipFilter(e.target.value)}
        >
          <option value="all">All Ships</option>
          {uniqueShips.map(ship => (
            <option key={ship} value={ship}>{ship}</option>
          ))}
        </select>
      </div>

      <div className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 shadow-lg p-4">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : filteredOps.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No operations found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200/50">
              <thead className="bg-white/40 backdrop-blur-sm">
                <tr>
                  {["Ship", "Master", "Status", "Start", "End", "Start Gap", "End Gap", "Alert", ""].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-sm font-medium uppercase text-gray-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredOps.map(op => {
                  const startDiff = op.kpi_ia_start_empty != null && op.kpi_master_start_empty != null
                    ? Math.abs(op.kpi_ia_start_empty - op.kpi_master_start_empty)
                    : null;
                  const endDiff = op.kpi_ia_end_empty != null && op.kpi_master_end_empty != null
                    ? Math.abs(op.kpi_ia_end_empty - op.kpi_master_end_empty)
                    : null;
                  return (
                    <tr key={op.id} className="hover:bg-white/40 transition-colors">
                      <td className="px-4 py-3 text-base font-medium text-gray-800">{op.ship_name}</td>
                      <td className="px-4 py-3 text-base text-gray-700">{op.masters?.name ?? "—"}</td>
                      <td className="px-4 py-3"><OperationStatusBadge status={op.status} /></td>
                      <td className="px-4 py-3 text-base text-gray-500">{new Date(op.start_time).toLocaleDateString("en-US")}</td>
                      <td className="px-4 py-3 text-base text-gray-500">{op.end_time ? new Date(op.end_time).toLocaleDateString("en-US") : "—"}</td>
                      <td className="px-4 py-3">
                        {startDiff != null ? (
                          <span className={startDiff > (op.diff_threshold ?? 15) ? "font-bold" : "text-green-700"} style={{ color: startDiff > (op.diff_threshold ?? 15) ? alertRed : undefined }}>
                            {startDiff.toFixed(1)}%
                          </span>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3">
                        {endDiff != null ? (
                          <span className={endDiff > (op.diff_threshold ?? 15) ? "font-bold" : "text-green-700"} style={{ color: endDiff > (op.diff_threshold ?? 15) ? alertRed : undefined }}>
                            {endDiff.toFixed(1)}%
                          </span>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3">
                        {op.alert_triggered ? (
                          <AlertTriangle className="h-5 w-5 text-red-500" title="Alert triggered" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-500" title="OK" />
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => onSelectOperation(op)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="View details"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function VesselsPage() {
  const vessels = [
    { id: "PSV-047", name: "PSV-047", location: "Tunis Port", status: "in_operation", lastImage: "2 min ago", occupancy: "87%" },
    { id: "PSV-048", name: "PSV Nordic Wind", location: "Bizerte Port", status: "waiting", lastImage: "15 min ago", occupancy: "—" },
    { id: "PSV-049", name: "PSV Atlas Rover", location: "Sfax Port", status: "maintenance", lastImage: "2h ago", occupancy: "—" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4"><div/></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vessels.map((vessel) => (
          <div key={vessel.id} className="backdrop-blur-md bg-white/60 rounded-xl p-5 border border-white/40 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-4"><div><h3 className="text-lg font-bold text-gray-800">{vessel.name}</h3><p className="text-xs text-gray-500">{vessel.location}</p></div><span className={`text-xs px-2 py-1 rounded-full ${vessel.status === "in_operation" ? "bg-green-100 text-green-700" : vessel.status === "waiting" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"}`}>{vessel.status.replace("_", " ")}</span></div>
            <div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-gray-700">{vessel.lastImage}</span></div><div className="flex justify-between"><span className="text-gray-500">Occupancy</span><span className="font-bold" style={{ color: primaryColor }}>{vessel.occupancy}</span></div></div>
            <button className="w-full mt-4 py-2 text-xs font-medium rounded-lg border transition" style={{ color: primaryColor, borderColor: `${primaryColor}30` }}>View details →</button>
          </div>
        ))}
      </div>
      <div className="backdrop-blur-md bg-white/60 rounded-xl p-5 border border-white/40 shadow-lg"><h3 className="text-sm font-semibold text-gray-800 mb-3">Vessel Locations</h3><div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center"><span className="text-gray-500 text-sm">🗺️ Interactive map of Tunisian ports</span></div></div>
    </div>
  );
}

function AlertsPage() {
  const [selectedAlert, setSelectedAlert] = useState<typeof alerts[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (alert: typeof alerts[0]) => {
    setSelectedAlert(alert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAlert(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">
          {alerts.length} alerts
        </span>
      </div>

      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200/50">
            <thead className="bg-gray-50/50 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Vessel</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Gap</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">AI vs Master</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/30 bg-white/30">
              {alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-white/40 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-mono text-gray-700">{alert.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">{alert.vessel}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-red-500">{alert.gap}%</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className="text-blue-600 font-semibold">{alert.iaValue}</span> vs{" "}
                    <span className="text-amber-600 font-semibold">{alert.masterValue}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        alert.priority === "critical"
                          ? "bg-red-500 text-white"
                          : alert.priority === "high"
                          ? "bg-orange-500 text-white"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {alert.priority}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{alert.time}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <button
                      onClick={() => openModal(alert)}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      title="View details"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && selectedAlert && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 w-full max-w-3xl max-h-[85vh] overflow-auto border border-white/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-gray-800">
                Alert Details {selectedAlert.id}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white/40 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">AI Image (Before)</div>
                  <img
                    src={selectedAlert.beforeImage}
                    alt="Before"
                    className="w-full h-40 object-cover rounded-md shadow-sm"
                  />
                  <div className="text-center mt-2 font-bold text-blue-600">
                    {selectedAlert.iaBeforePercent}% empty
                  </div>
                </div>
                <div className="p-3 bg-white/40 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">AI Image (After)</div>
                  <img
                    src={selectedAlert.afterImage}
                    alt="After"
                    className="w-full h-40 object-cover rounded-md shadow-sm"
                  />
                  <div className="text-center mt-2 font-bold text-blue-600">
                    {selectedAlert.iaAfterPercent !== null
                      ? `${selectedAlert.iaAfterPercent}% empty`
                      : "Not available"}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50/80 border border-red-200 rounded-lg">
                <div className="text-xs font-semibold text-red-600 mb-2">Gap Detected</div>
                <p className="text-sm text-red-700">{selectedAlert.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50/50 p-3 rounded-lg">
                  <span className="text-gray-500">Master Estimate:</span>
                  <p className="font-semibold text-gray-800">{selectedAlert.masterValue} empty</p>
                </div>
                <div className="bg-gray-50/50 p-3 rounded-lg">
                  <span className="text-gray-500">AI Estimate:</span>
                  <p className="font-semibold text-blue-600">{selectedAlert.iaValue} empty</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl border border-gray-300/70 bg-white/50 hover:bg-white/80 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MastersPage({
  masters,
  loading,
  ships,
  onAddMaster,
  onUpdateMaster,
  onDeleteMaster,
}: {
  masters: Master[];
  loading: boolean;
  ships: string[];
  onAddMaster: (name: string, shipName: string) => void;
  onUpdateMaster: (id: string, name: string, shipName: string) => void;
  onDeleteMaster: (id: string) => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const [editingMaster, setEditingMaster] = useState<Master | null>(null);
  const [formData, setFormData] = useState({ name: "", ship_name: "" });

  const openAddModal = () => {
    setEditingMaster(null);
    setFormData({ name: "", ship_name: "" });
    setShowModal(true);
  };

  const openEditModal = (master: Master) => {
    setEditingMaster(master);
    setFormData({ name: master.name, ship_name: master.ship_name });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.name.trim()) return;
    if (editingMaster) {
      onUpdateMaster(editingMaster.id, formData.name, formData.ship_name);
    } else {
      onAddMaster(formData.name, formData.ship_name);
    }
    setShowModal(false);
    setEditingMaster(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Permanently delete this master?")) {
      onDeleteMaster(id);
    }
  };

  return (
    <div className="space-y-6">
    
  

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 w-full max-w-md p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {editingMaster ? "Edit Master" : "New Master"}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg text-gray-800"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Assigned Ship</label>
                  <select
                    value={formData.ship_name}
                    onChange={(e) => setFormData({ ...formData, ship_name: e.target.value })}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg text-gray-800"
                  >
                    <option value="">-- No Ship --</option>
                    {ships.map((ship) => (
                      <option key={ship} value={ship}>
                        {ship}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-2 text-white rounded-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  {editingMaster ? "Update" : "Create"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// ============================================================
// 6. MAIN COMPONENT
// ============================================================
export default function Home() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "operations" | "ships" | "vessels" | "alerts" | "management">("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null);

  const { operations, loading: opsLoading } = useOperations();
  const { masters, loading: mastersLoading, addMaster, updateMaster, deleteMaster } = useMasters();

  const activeOps = operations.filter(o => o.status === "in_progress");
  const alertOps = operations.filter(o => o.alert_triggered);
  const activeMasters = masters.filter(m => m.active).length;
  const uniqueShips = new Set(masters.map(m => m.ship_name)).size;

  const [searchOp, setSearchOp] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredOps = operations.filter(op => {
    const matchSearch = op.ship_name.toLowerCase().includes(searchOp.toLowerCase()) || (op.masters?.name?.toLowerCase().includes(searchOp.toLowerCase()) ?? false);
    const matchStatus = statusFilter === "all" || op.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const shipsList = Array.from(new Set(masters.map(m => m.ship_name)));

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "operations", label: "Operations", icon: Activity },
    { id: "alerts", label: "Alerts", icon: AlertTriangle },
    { id: "vessels", label: "Vessels", icon: Ship },
  ];

  const pageTitles: Record<string, string> = {
    dashboard: "Dashboard",
    operations: "Operations",
    vessels: "Vessels",
    alerts: "Alerts",
    masters: "Masters",
    management: "Management",
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };
const operationsFillData = mockOperations
  .filter(op => op.kpi_ia_start_filled !== null && op.kpi_master_start_filled !== null)
  .map(op => ({
    name: op.ship_name,
    master: op.kpi_master_start_filled,
    ia: op.kpi_ia_start_filled,
  }));

  const renderContent = () => {
    switch (activeTab) {
     case "dashboard":
  // Préparation des données pour le BarChart
  const operationsFillData = mockOperations
    .filter(op => op.kpi_ia_start_filled !== null && op.kpi_master_start_filled !== null)
    .map(op => ({
      name: op.ship_name,
      master: op.kpi_master_start_filled,
      ia: op.kpi_ia_start_filled,
    }));

  return (
    <div className="space-y-6">
      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Operations" value={operations.length} icon={Activity} subtitle={`${activeOps.length} in progress`} />
        <StatCard title="Active Masters" value={activeMasters} icon={Users} />
        <StatCard title="Active Ships" value={uniqueShips} icon={Ship} />
        <StatCard title="Maintainance Ships" value={uniqueShips} icon={Ship} />

      </div>

      {/* Section des graphiques */}
      <div className="space-y-6">
        {/* Graphique 1 : Évolution du % vide (LineChart) */}
       

        {/* Graphique 2 : Comparaison par opération (BarChart) */}
        <div className="backdrop-blur-md bg-white/60 rounded-xl p-5 border border-white/40 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Fill Percentage Comparison — Master vs AI (per Operation)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={operationsFillData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "10px" }}
                iconSize={12}
                iconType="circle"
              />
              <Bar
                dataKey="master"
                name="Master"
                fill={secondaryColor}
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
              <Bar
                dataKey="ia"
                name="AI"
                fill={primaryColor}
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }}></span>
              AI Prediction
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: secondaryColor }}></span>
              Master Entry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      case "operations":
        return (
          <OperationsPage
            operations={operations}
            loading={opsLoading}
            onSelectOperation={setSelectedOperation}
          />
        );
      case "vessels":
        return <VesselsPage />;
      case "alerts":
        return <AlertsPage />;
        default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <aside className={`${sidebarCollapsed ? "w-20" : "w-64"} backdrop-blur-xl bg-white/20 border-r border-white/50 shadow-xl p-4 transition-all duration-300`}>
        <div className="mb-8 flex items-center gap-2 px-2">
          <Anchor className="h-7 w-7" style={{ color: primaryColor }} />
          {!sidebarCollapsed && <span className="text-2xl font-bold bg-gradient-to-r from-[#00b0ff] to-[#45a894] bg-clip-text text-transparent">Cargo SuperAdmin</span>}
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${activeTab === item.id ? "bg-white/40 shadow-sm text-gray-900" : "text-gray-700 hover:bg-white/30"}`}
            >
              <item.icon className="h-5 w-5" style={{ color: activeTab === item.id ? primaryColor : undefined }} />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white/30 rounded-lg text-base">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`}>
              <polyline points="11 17 6 12 11 7" />
              <polyline points="18 17 13 12 18 7" />
            </svg>
            {!sidebarCollapsed && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/40 border-b border-white/50 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{pageTitles[activeTab] || "Cargo Admin"}</h1>
            {activeTab === "dashboard" && <p className="text-base text-gray-600 mt-1">Overview of cargo operations</p>}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-lg"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
        <div className="p-6">{renderContent()}</div>
      </main>

      <AnimatePresence>
        {selectedOperation && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedOperation(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white/95 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white/90 z-10 p-6 border-b border-gray-200 flex items-center justify-between">
                <div><h2 className="text-2xl font-bold text-gray-800">{selectedOperation.ship_name}</h2><p className="text-blue-600 text-base">Operation {selectedOperation.id}</p></div>
                <button onClick={() => setSelectedOperation(null)} className="text-gray-500 hover:text-gray-700"><X size={28} /></button>
              </div>
              <div className="p-6 space-y-8">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex gap-4 items-center">
                    <span className={`px-4 py-2 text-base font-semibold rounded-full ${selectedOperation.status === 'in_progress' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>{selectedOperation.status === 'in_progress' ? 'IN PROGRESS' : 'COMPLETED'}</span>
                    <div className="flex items-center gap-4 text-base text-gray-600"><Calendar size={18} /><span>{format(new Date(selectedOperation.start_time), 'dd MMMM yyyy', { locale: enUS })}</span><Clock size={18} /><span>{format(new Date(selectedOperation.start_time), 'HH:mm')} — {selectedOperation.end_time ? format(new Date(selectedOperation.end_time), 'HH:mm') : 'In progress'}</span></div>
                  </div>
                  {selectedOperation.alert_triggered && (
                    <div className="bg-red-100 border border-red-300 px-4 py-2 rounded-xl flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <div><p className="font-bold text-sm text-red-600">Gap Alert</p><p className="text-base text-red-700">{selectedOperation.alert_message}</p></div>
                    </div>
                  )}
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-white/40"><h3 className="text-xl font-bold flex items-center gap-2"><ImageIcon className="text-blue-500" /> Cargo Status</h3></div>
                  <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                    <div className="p-6">
                      <p className="text-sm font-bold text-gray-500 mb-3">Operation Start</p>
                      <img src={selectedOperation.start_image_url || "https://picsum.photos/id/1015/800/500"} className="w-full aspect-video object-cover rounded-xl border border-gray-300" alt="start" />
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div><p className="text-sm text-gray-500">AI</p><p className="text-4xl font-bold text-blue-600">{selectedOperation.kpi_ia_start_filled || 0}%</p></div>
                        <div><p className="text-sm text-gray-500">Master</p><p className="text-4xl font-bold text-gray-800">{selectedOperation.kpi_master_start_filled || 0}%</p></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-bold text-gray-500 mb-3">Operation End</p>
                      {selectedOperation.end_image_url ? (
                        <img src={selectedOperation.end_image_url} className="w-full aspect-video object-cover rounded-xl border border-gray-300" alt="end" />
                      ) : (
                        <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-base">Operation in progress...</div>
                      )}
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div><p className="text-sm text-gray-500">AI</p><p className="text-4xl font-bold text-blue-600">{selectedOperation.kpi_ia_end_filled || '—'}%</p></div>
                        <div><p className="text-sm text-gray-500">Master</p><p className="text-4xl font-bold text-gray-800">{selectedOperation.kpi_master_end_filled || '—'}%</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="text-blue-500" /> KPI Comparison</h3>
                  <KpiComparisonDetailed iaValue={selectedOperation.kpi_ia_start_filled || 0} masterValue={selectedOperation.kpi_master_start_filled || 0} label="Operation Start" />
                  {selectedOperation.kpi_ia_end_filled !== null && (
                    <KpiComparisonDetailed iaValue={selectedOperation.kpi_ia_end_filled} masterValue={selectedOperation.kpi_master_end_filled || 0} label="Operation End" />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}