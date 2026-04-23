"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  Ship,
  Users,
  Plus,
  Edit,
  Search,
  Anchor,
  LayoutDashboard,
  CheckCircle,
  History,
  X,
  Trash2,
  LogOut,
  UserPlus,
  UserCheck,
  Clock,
  Wrench,
  Anchor as AnchorIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// 0. CONSTANTS & COLORS
// ============================================================
const primaryColor = "#00b0ff";
const secondaryColor = "#FFC700";

// ============================================================
// 1. TYPES & INTERFACES
// ============================================================
interface Master {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  ship_id: string | null;
  active: boolean;
  created_at: string;
}

interface Ship {
  id: string;
  name: string;
  status: "inactive" | "active" | "maintenance";
  created_at: string;
  master_id: string | null;
}

interface Operation {
  id: string;
  master_id: string;
  ship_id: string;
  status: "in_progress" | "completed" | "cancelled";
  start_time: string;
  end_time: string | null;
  start_image_url: string | null;
  end_image_url: string | null;
  kpi_master_start_filled: number | null;
  kpi_master_end_filled: number | null;
  created_at: string;
}

// ============================================================
// 2. MOCK DATA
// ============================================================
const now = Date.now();
const days = (d: number) => new Date(now - d * 86400_000).toISOString();
const hours = (h: number) => new Date(now - h * 3600_000).toISOString();

const mockShips: Ship[] = [
  { id: "ship1", name: "MV CargoStar", status: "active", created_at: days(150), master_id: "m1" },
  { id: "ship2", name: "MV OceanRunner", status: "active", created_at: days(120), master_id: "m2" },
  { id: "ship3", name: "MV BlueWave", status: "inactive", created_at: days(90), master_id: null },
  { id: "ship4", name: "MV NorthWind", status: "active", created_at: days(60), master_id: "m4" },
  { id: "ship5", name: "PSV-047", status: "maintenance", created_at: days(30), master_id: null },
  { id: "ship6", name: "PSV Nordic Wind", status: "inactive", created_at: days(45), master_id: null },
];

const mockMasters: Master[] = [
  { id: "m1", email: "jean@example.com", firstName: "Jean", lastName: "Dupont", fullName: "Jean Dupont", ship_id: "ship1", active: true, created_at: days(120) },
  { id: "m2", email: "sophie@example.com", firstName: "Sophie", lastName: "Martin", fullName: "Sophie Martin", ship_id: "ship2", active: true, created_at: days(95) },
  { id: "m3", email: "karim@example.com", firstName: "Karim", lastName: "Benali", fullName: "Karim Benali", ship_id: null, active: false, created_at: days(60) },
  { id: "m4", email: "elise@example.com", firstName: "Élise", lastName: "Moreau", fullName: "Élise Moreau", ship_id: "ship4", active: true, created_at: days(40) },
  { id: "m5", email: "marc@example.com", firstName: "Marc", lastName: "Lefèvre", fullName: "Marc Lefèvre", ship_id: null, active: false, created_at: days(200) },
];

const mockOperations: Operation[] = [
  {
    id: "op1", master_id: "m1", ship_id: "ship1", status: "in_progress",
    start_time: hours(2), end_time: null,
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: null,
    kpi_master_start_filled: 40.0, kpi_master_end_filled: null,
    created_at: hours(2),
  },
  {
    id: "op2", master_id: "m2", ship_id: "ship2", status: "completed",
    start_time: hours(28), end_time: hours(20),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_master_start_filled: 12.0, kpi_master_end_filled: 94.0,
    created_at: hours(28),
  },
  {
    id: "op3", master_id: "m3", ship_id: "ship3", status: "completed",
    start_time: days(2), end_time: days(2),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_master_start_filled: 50.0, kpi_master_end_filled: 70.0,
    created_at: days(2),
  },
  {
    id: "op4", master_id: "m1", ship_id: "ship1", status: "completed",
    start_time: days(3), end_time: days(3),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_master_start_filled: 12.0, kpi_master_end_filled: 94.0,
    created_at: days(3),
  },
  {
    id: "op5", master_id: "m4", ship_id: "ship4", status: "in_progress",
    start_time: hours(5), end_time: null,
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: null,
    kpi_master_start_filled: 52.0, kpi_master_end_filled: null,
    created_at: hours(5),
  },
  {
    id: "op6", master_id: "m2", ship_id: "ship2", status: "cancelled",
    start_time: days(5), end_time: days(5),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: null,
    kpi_master_start_filled: null, kpi_master_end_filled: null,
    created_at: days(5),
  },
  {
    id: "op7", master_id: "m1", ship_id: "ship1", status: "completed",
    start_time: days(7), end_time: days(7),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_master_start_filled: 24.0, kpi_master_end_filled: 80.0,
    created_at: days(7),
  },
  {
    id: "op8", master_id: "m3", ship_id: "ship3", status: "completed",
    start_time: days(10), end_time: days(10),
    start_image_url: "https://picsum.photos/id/1015/800/500", end_image_url: "https://picsum.photos/id/106/800/500",
    kpi_master_start_filled: 20.0, kpi_master_end_filled: 75.0,
    created_at: days(10),
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

  const addMaster = async (firstName: string, lastName: string, email: string, password: string) => {
    const newMaster: Master = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      ship_id: null,
      active: false,
      created_at: new Date().toISOString(),
    };
    setMasters(prev => [...prev, newMaster]);
  };

  const updateMaster = async (id: string, firstName: string, lastName: string, email: string) => {
    setMasters(prev => prev.map(m =>
      m.id === id ? { ...m, firstName, lastName, fullName: `${firstName} ${lastName}`, email } : m
    ));
  };

  const deleteMaster = async (id: string) => {
    setMasters(prev => prev.filter(m => m.id !== id));
  };

  const assignMasterToShip = (masterId: string, shipId: string) => {
    setMasters(prev => prev.map(m =>
      m.id === masterId ? { ...m, ship_id: shipId, active: true } : m
    ));
  };

  const unassignMaster = (masterId: string) => {
    setMasters(prev => prev.map(m =>
      m.id === masterId ? { ...m, ship_id: null, active: false } : m
    ));
  };

  return { masters, loading, addMaster, updateMaster, deleteMaster, assignMasterToShip, unassignMaster };
}

function useShips() {
  const [ships, setShips] = useState<Ship[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShips(mockShips);
      setLoading(false);
    }, 300);
  }, []);

  const addShip = (name: string, status: "inactive" | "active" | "maintenance") => {
    const newShip: Ship = {
      id: Date.now().toString(),
      name,
      status,
      created_at: new Date().toISOString(),
      master_id: null,
    };
    setShips(prev => [...prev, newShip]);
  };

  const updateShip = (id: string, name: string, status: "inactive" | "active" | "maintenance") => {
    setShips(prev => prev.map(s => s.id === id ? { ...s, name, status } : s));
  };

  const deleteShip = (id: string) => {
    setShips(prev => prev.filter(s => s.id !== id));
  };

  const assignShipToMaster = (shipId: string, masterId: string) => {
    setShips(prev => prev.map(s =>
      s.id === shipId ? { ...s, status: "active", master_id: masterId } : s
    ));
  };

  const unassignShip = (shipId: string) => {
    setShips(prev => prev.map(s =>
      s.id === shipId ? { ...s, status: "inactive", master_id: null } : s
    ));
  };

  return { ships, loading, addShip, updateShip, deleteShip, assignShipToMaster, unassignShip };
}

// ============================================================
// 4. UI COMPONENTS
// ============================================================
function StatCard({ title, value, icon: Icon, subtitle, color }: { title: string; value: number; icon: any; subtitle?: string; color?: string }) {
  const bgColor = color ? `${color}20` : `${primaryColor}20`;
  const iconColor = color || primaryColor;
  return (
    <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 shadow-xl p-5 transition-all duration-300 hover:shadow-2xl hover:bg-white/40">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-medium text-gray-700">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
        </div>
        <div className="rounded-full p-3" style={{ backgroundColor: bgColor, color: iconColor }}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

function OperationStatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; className: string }> = {
    in_progress: { label: "In Progress", className: "bg-amber-100/80 text-amber-800" },
    completed: { label: "Completed", className: "bg-green-100/80 text-green-800" },
    cancelled: { label: "Cancelled", className: "bg-red-100/80 text-red-800" },
  };
  const c = config[status] ?? config.in_progress;
  return <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${c.className}`}>{c.label}</span>;
}

function ShipStatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; className: string }> = {
    inactive: { label: "Inactive", className: "bg-gray-100/80 text-gray-600" },
    active: { label: "Active", className: "bg-green-100/80 text-green-700" },
    maintenance: { label: "Maintenance", className: "bg-red-100/80 text-red-600" },
  };
  const c = config[status] ?? config.inactive;
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${c.className}`}>{c.label}</span>;
}

// ============================================================
// 5. MODULES (Add Master, Add Ship, Assign)
// ============================================================

// Module d'ajout de master (état inactif par défaut)
function AddMasterModule({ onAddMaster }: { onAddMaster: (firstName: string, lastName: string, email: string, password: string) => void }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Password required";
    else if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;
    onAddMaster(formData.firstName, formData.lastName, formData.email, formData.password);
    setShowModal(false);
    setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-all hover:opacity-90"
        style={{ backgroundColor: primaryColor }}
      >
        <UserPlus className="h-5 w-5" /> Add Master 
      </button>

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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Master (inactive by default)</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2 bg-white/80 border border-gray-300 rounded-lg"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2 bg-white/80 border border-gray-300 rounded-lg"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Password *</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setShowModal(false)} className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg">
                  Cancel
                </button>
                <button onClick={handleSave} className="flex-1 py-2 text-white rounded-lg" style={{ backgroundColor: primaryColor }}>
                  Create Master
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Module d'ajout de navire (état inactif par défaut)
function AddShipModule({ onAddShip }: { onAddShip: (name: string, status: "inactive" | "active" | "maintenance") => void }) {
  const [showModal, setShowModal] = useState(false);
  const [shipName, setShipName] = useState("");
  const [status, setStatus] = useState<"inactive" | "active" | "maintenance">("inactive");

  const handleSave = () => {
    if (!shipName.trim()) return;
    onAddShip(shipName.trim(), status);
    setShowModal(false);
    setShipName("");
    setStatus("inactive");
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-all hover:opacity-90"
        style={{ backgroundColor: primaryColor }}
      >
        <Plus className="h-5 w-5" /> Create Vessel (inactive)
      </button>

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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Vessel</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Vessel Name *</label>
                  <input
                    type="text"
                    value={shipName}
                    onChange={(e) => setShipName(e.target.value)}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                    placeholder="e.g., MV New Horizon"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Initial Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  >
                    <option value="inactive">Inactive</option>
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Default: Inactive (can be changed later)</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setShowModal(false)} className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg">
                  Cancel
                </button>
                <button onClick={handleSave} className="flex-1 py-2 text-white rounded-lg" style={{ backgroundColor: primaryColor }}>
                  Create Vessel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Module d'assignation (master inactif + navire inactif -> deviennent actifs et liés)
function AssignModule({ masters, ships, onAssign }: { masters: Master[]; ships: Ship[]; onAssign: (masterId: string, shipId: string) => void }) {
  const [selectedMasterId, setSelectedMasterId] = useState("");
  const [selectedShipId, setSelectedShipId] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const inactiveMasters = masters.filter(m => !m.active && m.ship_id === null);
  const inactiveShips = ships.filter(s => s.status === "inactive" && s.master_id === null);

  const handleAssign = () => {
    if (!selectedMasterId) {
      setMessage({ type: "error", text: "Please select an inactive master." });
      return;
    }
    if (!selectedShipId) {
      setMessage({ type: "error", text: "Please select an inactive vessel." });
      return;
    }
    onAssign(selectedMasterId, selectedShipId);
    setMessage({ type: "success", text: "Master and vessel are now active and linked!" });
    setTimeout(() => setMessage(null), 3000);
    setSelectedMasterId("");
    setSelectedShipId("");
  };

  return (
    <div className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <UserCheck className="h-6 w-6" style={{ color: primaryColor }} />
        Assign Inactive Master to Inactive Vessel
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Inactive Master</label>
          <select
            value={selectedMasterId}
            onChange={(e) => setSelectedMasterId(e.target.value)}
            className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg"
          >
            <option value="">-- Choose an inactive master --</option>
            {inactiveMasters.map(master => (
              <option key={master.id} value={master.id}>
                {master.fullName} 
              </option>
            ))}
          </select>
          {inactiveMasters.length === 0 && <p className="text-sm text-amber-600 mt-1">No inactive masters available.</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Inactive Vessel</label>
          <select
            value={selectedShipId}
            onChange={(e) => setSelectedShipId(e.target.value)}
            className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg"
          >
            <option value="">-- Choose an inactive vessel --</option>
            {inactiveShips.map(ship => (
              <option key={ship.id} value={ship.id}>
                {ship.name}
              </option>
            ))}
          </select>
          {inactiveShips.length === 0 && <p className="text-sm text-amber-600 mt-1">No inactive vessels available.</p>}
        </div>
        <button
          onClick={handleAssign}
          disabled={inactiveMasters.length === 0 || inactiveShips.length === 0}
          className="w-full py-2 text-white rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: primaryColor }}
        >
          Assign & Activate
        </button>
        {message && (
          <div className={`p-3 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// 6. PAGE COMPONENTS
// ============================================================

// Liste des masters
function MasterList({ masters, ships, onDelete, onEdit }: { masters: Master[]; ships: Ship[]; onDelete: (id: string) => void; onEdit: (master: Master) => void }) {
  const getShipName = (shipId: string | null) => {
    if (!shipId) return "Not assigned";
    const ship = ships.find(s => s.id === shipId);
    return ship ? ship.name : "Unknown";
  };

  return (
    <div className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/40">
            <tr className="text-gray-600 text-sm font-semibold uppercase">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Assigned Vessel</th>
              <th className="px-4 py-3 text-left">Created</th>
              <th className="px-4 py-3 text-left">Actions</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/50">
            {masters.map((master) => (
              <tr key={master.id} className="hover:bg-white/30">
                <td className="px-4 py-3 text-base font-medium text-gray-800">{master.fullName}</td>
                <td className="px-4 py-3 text-gray-600">{master.email}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${master.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                    {master.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{getShipName(master.ship_id)}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{new Date(master.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button onClick={() => onEdit(master)} className="p-1 rounded hover:bg-white/50" style={{ color: secondaryColor }}>
                      <Edit size={18} />
                    </button>
                    <button onClick={() => onDelete(master.id)} className="p-1 rounded hover:bg-white/50 text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Gestion des navires
function ShipsAdminPage({ ships, onAddShip, onUpdateShip, onDeleteShip }: { 
  ships: Ship[]; 
  onAddShip: (name: string, status: "inactive" | "active" | "maintenance") => void; 
  onUpdateShip: (id: string, name: string, status: "inactive" | "active" | "maintenance") => void; 
  onDeleteShip: (id: string) => void;
}) {
  const [editingShip, setEditingShip] = useState<Ship | null>(null);
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState<"inactive" | "active" | "maintenance">("inactive");

  const openEditModal = (ship: Ship) => {
    setEditingShip(ship);
    setEditName(ship.name);
    setEditStatus(ship.status);
  };

  const handleUpdate = () => {
    if (editingShip && editName.trim()) {
      onUpdateShip(editingShip.id, editName.trim(), editStatus);
      setEditingShip(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">🚢 Vessel Management</h3>
        <AddShipModule onAddShip={onAddShip} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ships.map((ship) => (
          <div key={ship.id} className="backdrop-blur-xl bg-white/30 p-5 rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                <Ship className="w-6 h-6" style={{ color: primaryColor }} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-lg">{ship.name}</h4>
                <div className="mt-1"><ShipStatusBadge status={ship.status} /></div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3">Created: {new Date(ship.created_at).toLocaleDateString()}</div>
            <div className="flex justify-end gap-2">
              <button onClick={() => openEditModal(ship)} className="p-2 rounded-lg hover:bg-white/50 transition" style={{ color: secondaryColor }}>
                <Edit size={18} />
              </button>
              <button onClick={() => onDeleteShip(ship.id)} className="p-2 rounded-lg hover:bg-white/50 transition text-red-500">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {editingShip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setEditingShip(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 w-full max-w-md p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Vessel</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Vessel Name</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Status</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as any)}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  >
                    <option value="inactive">Inactive</option>
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setEditingShip(null)} className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg">
                  Cancel
                </button>
                <button onClick={handleUpdate} className="flex-1 py-2 text-white rounded-lg" style={{ backgroundColor: primaryColor }}>
                  Update
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Page d'historique des opérations (filtres par master ou navire)
function OperationsHistoryPage({ operations, masters, ships }: { operations: Operation[]; masters: Master[]; ships: Ship[] }) {
  const [selectedMasterId, setSelectedMasterId] = useState<string>("");
  const [selectedShipId, setSelectedShipId] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOps = operations.filter(op => {
    if (selectedMasterId && op.master_id !== selectedMasterId) return false;
    if (selectedShipId && op.ship_id !== selectedShipId) return false;
    if (searchTerm) {
      const master = masters.find(m => m.id === op.master_id);
      const ship = ships.find(s => s.id === op.ship_id);
      const matchMaster = master?.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchShip = ship?.name.toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchMaster && !matchShip) return false;
    }
    return true;
  });

  const completedCount = filteredOps.filter(o => o.status === "completed").length;
  const totalCount = filteredOps.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Master</label>
          <select
            value={selectedMasterId}
            onChange={(e) => setSelectedMasterId(e.target.value)}
            className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg"
          >
            <option value="">All Masters</option>
            {masters.map(m => (
              <option key={m.id} value={m.id}>{m.fullName} ({m.active ? "active" : "inactive"})</option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Vessel</label>
          <select
            value={selectedShipId}
            onChange={(e) => setSelectedShipId(e.target.value)}
            className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg"
          >
            <option value="">All Vessels</option>
            {ships.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input
            type="text"
            placeholder="Master name or vessel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="px-4 py-2 bg-white/50 rounded-lg">
          <span className="text-sm text-gray-600">Total: <strong>{totalCount}</strong></span>
        </div>
        <div className="px-4 py-2 bg-green-50/50 rounded-lg">
          <span className="text-sm text-green-700">Completed: <strong>{completedCount}</strong></span>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 shadow-lg overflow-hidden">
        {filteredOps.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No operations found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200/50">
              <thead className="bg-white/40">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Vessel</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Master</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Start Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">End Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Fill % (Start)</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Fill % (End)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/30">
                {filteredOps.map((op) => {
                  const master = masters.find(m => m.id === op.master_id);
                  const ship = ships.find(s => s.id === op.ship_id);
                  return (
                    <tr key={op.id} className="hover:bg-white/30">
                      <td className="px-4 py-3 text-base font-medium text-gray-800">{ship?.name || "—"}</td>
                      <td className="px-4 py-3 text-gray-700">{master?.fullName || "—"}</td>
                      <td className="px-4 py-3"><OperationStatusBadge status={op.status} /></td>
                      <td className="px-4 py-3 text-sm text-gray-600">{new Date(op.start_time).toLocaleDateString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{op.end_time ? new Date(op.end_time).toLocaleDateString() : "—"}</td>
                      <td className="px-4 py-3 text-sm">{op.kpi_master_start_filled != null ? `${op.kpi_master_start_filled}%` : "—"}</td>
                      <td className="px-4 py-3 text-sm">{op.kpi_master_end_filled != null ? `${op.kpi_master_end_filled}%` : "—"}</td>
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

// Dashboard avec vue globale et dernières opérations (CORRIGÉ)
function Dashboard({ ships, operations, masters }: { ships: Ship[]; operations: Operation[]; masters: Master[] }) {
  const activeShips = ships.filter(s => s.status === "active").length;
  const inactiveShips = ships.filter(s => s.status === "inactive").length;
  const maintenanceShips = ships.filter(s => s.status === "maintenance").length;
  const completedOps = operations.filter(o => o.status === "completed").length;
  const lastOperations = [...operations].sort((a,b) => new Date(b.start_time).getTime() - new Date(a.start_time).getTime()).slice(0, 5);

  const pieData = [
    { name: "Active", value: activeShips, color: "#10b981" },
    { name: "Inactive", value: inactiveShips, color: "#6b7280" },
    { name: "Maintenance", value: maintenanceShips, color: "#f59e0b" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Vessels" value={activeShips} icon={Ship} color="#10b981" />
        <StatCard title="Inactive Vessels" value={inactiveShips} icon={AnchorIcon} color="#6b7280" />
        <StatCard title="Maintenance" value={maintenanceShips} icon={Wrench} color="#f59e0b" />
        <StatCard title="Completed Ops" value={completedOps} icon={CheckCircle} color={primaryColor} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="backdrop-blur-md bg-white/60 rounded-xl p-5 border border-white/40 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5" style={{ color: primaryColor }} />
            Last 5 Operations
          </h3>
          <div className="space-y-3">
            {lastOperations.map(op => {
              const ship = ships.find(s => s.id === op.ship_id);
              const master = masters.find(m => m.id === op.master_id);
              return (
                <div key={op.id} className="flex justify-between items-center p-3 bg-white/40 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{ship?.name || "Unknown"}</p>
                    <p className="text-xs text-gray-500">{master?.fullName || "—"} • {new Date(op.start_time).toLocaleDateString()}</p>
                  </div>
                  <OperationStatusBadge status={op.status} />
                </div>
              );
            })}
            {lastOperations.length === 0 && <p className="text-gray-500 text-center">No operations yet.</p>}
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/60 rounded-xl p-5 border border-white/40 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Vessel Status Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 7. MAIN COMPONENT
// ============================================================
export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "ships" | "masters" | "assign" | "history">("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [editingMaster, setEditingMaster] = useState<Master | null>(null);
  const [editMasterForm, setEditMasterForm] = useState({ firstName: "", lastName: "", email: "" });

  const { operations } = useOperations();
  const { masters, addMaster, updateMaster, deleteMaster, assignMasterToShip } = useMasters();
  const { ships, addShip, updateShip, deleteShip, assignShipToMaster } = useShips();

  // Fonction d'assignation qui lie un master inactif et un navire inactif
  const handleAssign = (masterId: string, shipId: string) => {
    assignMasterToShip(masterId, shipId);
    assignShipToMaster(shipId, masterId);
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "ships", label: "Vessels", icon: Ship },
    { id: "masters", label: "Masters", icon: Users },
    { id: "assign", label: "Assign", icon: UserCheck },
    { id: "history", label: "History", icon: History },
  ];

  const pageTitles: Record<string, string> = {
    dashboard: "Dashboard",
    ships: "Vessel Management",
    masters: "Master Management",
    assign: "Assign Master to Vessel",
    history: "Operations History",
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };

  const handleEditMaster = (master: Master) => {
    setEditingMaster(master);
    setEditMasterForm({ firstName: master.firstName, lastName: master.lastName, email: master.email });
  };

  const handleUpdateMaster = () => {
    if (editingMaster) {
      updateMaster(editingMaster.id, editMasterForm.firstName, editMasterForm.lastName, editMasterForm.email);
      setEditingMaster(null);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard ships={ships} operations={operations} masters={masters} />;
      case "ships":
        return <ShipsAdminPage ships={ships} onAddShip={addShip} onUpdateShip={updateShip} onDeleteShip={deleteShip} />;
      case "masters":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Master List</h3>
              <AddMasterModule onAddMaster={addMaster} />
            </div>
            <MasterList masters={masters} ships={ships} onDelete={deleteMaster} onEdit={handleEditMaster} />
          </div>
        );
      case "assign":
        return <AssignModule masters={masters} ships={ships} onAssign={handleAssign} />;
      case "history":
        return <OperationsHistoryPage operations={operations} masters={masters} ships={ships} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? "w-20" : "w-64"} backdrop-blur-xl bg-white/20 border-r border-white/50 shadow-xl p-4 transition-all duration-300`}>
        <div className="mb-8 flex items-center gap-2 px-2">
          <Anchor className="h-7 w-7" style={{ color: primaryColor }} />
          {!sidebarCollapsed && (
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00b0ff] to-[#45a894] bg-clip-text text-transparent">
              Admin Portal
            </span>
          )}
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-white/40 shadow-sm text-gray-900"
                  : "text-gray-700 hover:bg-white/30"
              }`}
            >
              <item.icon className="h-5 w-5" style={{ color: activeTab === item.id ? primaryColor : undefined }} />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white/30 rounded-lg text-base"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`}>
              <polyline points="11 17 6 12 11 7" />
              <polyline points="18 17 13 12 18 7" />
            </svg>
            {!sidebarCollapsed && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/40 border-b border-white/50 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{pageTitles[activeTab]}</h1>
            {activeTab === "dashboard" && <p className="text-base text-gray-600 mt-1">Global overview of vessels and operations</p>}
            {activeTab === "ships" && <p className="text-base text-gray-600 mt-1">Create, edit or delete vessels</p>}
            {activeTab === "masters" && <p className="text-base text-gray-600 mt-1">Manage masters (inactive by default)</p>}
            {activeTab === "assign" && <p className="text-base text-gray-600 mt-1">Link an inactive master to an inactive vessel</p>}
            {activeTab === "history" && <p className="text-base text-gray-600 mt-1">View all operations with filters</p>}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-lg"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
        <div className="p-6">{renderContent()}</div>
      </main>

      {/* Modal d'édition d'un master */}
      <AnimatePresence>
        {editingMaster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setEditingMaster(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 w-full max-w-md p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Master</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name</label>
                    <input
                      type="text"
                      value={editMasterForm.firstName}
                      onChange={(e) => setEditMasterForm({ ...editMasterForm, firstName: e.target.value })}
                      className="w-full px-3 py-2 bg-white/80 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={editMasterForm.lastName}
                      onChange={(e) => setEditMasterForm({ ...editMasterForm, lastName: e.target.value })}
                      className="w-full px-3 py-2 bg-white/80 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={editMasterForm.email}
                    onChange={(e) => setEditMasterForm({ ...editMasterForm, email: e.target.value })}
                    className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setEditingMaster(null)} className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg">
                  Cancel
                </button>
                <button onClick={handleUpdateMaster} className="flex-1 py-2 text-white rounded-lg" style={{ backgroundColor: primaryColor }}>
                  Update
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}