"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  Ship,
  Clock,
  PlayCircle,
  Check,
  History,
  Home,
  PlusCircle,
  Eye,
  Trash2,
  XCircle,
  Lock,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// SOLUTION Colors (matching admin)
export const SOLUTION = {
  name: ["IQ", "LOG", "ECO", "IA"],
  colors: ["#00b0ff", "#FFC700", "#45a894", "#e1294c"],
};

const primaryColor = SOLUTION.colors[0];
const secondaryColor = SOLUTION.colors[1];
const accentGreen = SOLUTION.colors[2];
const alertRed = SOLUTION.colors[3];

// ------------------------------
// MOCK DATA (for master)
// ------------------------------
interface Master {
  id: string;
  name: string;
  email: string;
}

interface Operation {
  id: string;
  master_id: string;
  ship_name: string;
  status: "in_progress" | "completed" | "cancelled";
  start_time: string;
  end_time: string | null;
  kpi_master_start_empty: number | null;
  kpi_master_end_empty: number | null;
  alert_triggered: boolean;
  alert_message: string | null;
  diff_threshold: number;
}

const CURRENT_MASTER: Master = {
  id: "m1",
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
};

// Mock data (simulation)
const now = Date.now();
const hours = (h: number) => new Date(now - h * 3600_000).toISOString();
const days = (d: number) => new Date(now - d * 86400_000).toISOString();

let mockOperations: Operation[] = [
  {
    id: "op1",
    master_id: "m1",
    ship_name: "MV CargoStar",
    status: "in_progress",
    start_time: hours(2),
    end_time: null,
    kpi_master_start_empty: 60.0,
    kpi_master_end_empty: null,
    alert_triggered: false,
    alert_message: null,
    diff_threshold: 15,
  },
  {
    id: "op2",
    master_id: "m1",
    ship_name: "MV CargoStar",
    status: "completed",
    start_time: days(3),
    end_time: days(3),
    kpi_master_start_empty: 88.0,
    kpi_master_end_empty: 6.0,
    alert_triggered: false,
    alert_message: null,
    diff_threshold: 15,
  },
  {
    id: "op3",
    master_id: "m1",
    ship_name: "MV CargoStar",
    status: "completed",
    start_time: days(7),
    end_time: days(7),
    kpi_master_start_empty: 76.0,
    kpi_master_end_empty: 20.0,
    alert_triggered: false,
    alert_message: null,
    diff_threshold: 15,
  },
];

function useMasterOperations() {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => {
      const myOps = mockOperations.filter(op => op.master_id === CURRENT_MASTER.id);
      setOperations(myOps);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    refresh();
  }, []);

  const createOperationWithKpi = (shipName: string, filledPercent: number) => {
    const emptyPercent = 100 - filledPercent;
    const newOp: Operation = {
      id: Date.now().toString(),
      master_id: CURRENT_MASTER.id,
      ship_name: shipName,
      status: "in_progress",
      start_time: new Date().toISOString(),
      end_time: null,
      kpi_master_start_empty: emptyPercent,
      kpi_master_end_empty: null,
      alert_triggered: false,
      alert_message: null,
      diff_threshold: 15,
    };
    mockOperations = [...mockOperations, newOp];
    refresh();
    return newOp;
  };

  const updateOperation = (id: string, updates: Partial<Operation>) => {
    mockOperations = mockOperations.map(op =>
      op.id === id ? { ...op, ...updates } : op
    );
    refresh();
  };

  const deleteOperation = (id: string) => {
    mockOperations = mockOperations.filter(op => op.id !== id);
    refresh();
  };

  return { operations, loading, createOperationWithKpi, updateOperation, deleteOperation };
}

// ============================================================
// STYLED UI COMPONENTS (glassmorphism, enlarged text)
// ============================================================
function StatCard({ title, value, icon: Icon, color }: { title: string; value: number; icon: any; color: string }) {
  return (
    <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 shadow-xl p-5 transition-all duration-300 hover:shadow-2xl hover:bg-white/40">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-medium text-gray-700">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
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
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm ${c.className}`}>
      {c.label}
    </span>
  );
}



type Tab = "dashboard" | "history" | "new" | "profile";

export default function MasterPortal() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const { operations, loading, createOperationWithKpi, updateOperation, deleteOperation } = useMasterOperations();

  const [showViewModal, setShowViewModal] = useState<Operation | null>(null);
  const [showFinishModal, setShowFinishModal] = useState<Operation | null>(null);
  const [finishFilledPercent, setFinishFilledPercent] = useState("");
  const [newShipName, setNewShipName] = useState("");
  const [newOccupancy, setNewOccupancy] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string } | null>(null);

  const activeOps = operations.filter((o) => o.status === "in_progress");
  const completedOps = operations.filter((o) => o.status === "completed");

  const handleFinishOperation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showFinishModal) return;
    const emptyPercent = (100 - parseFloat(finishFilledPercent)).toFixed(1);
    updateOperation(showFinishModal.id, {
      kpi_master_end_empty: parseFloat(emptyPercent),
      end_time: new Date().toISOString(),
      status: "completed",
    });
    setToastMessage({
      title: "Operation Completed",
      description: `Final KPI recorded: ${finishFilledPercent}% filled`,
    });
    setFinishFilledPercent("");
    setShowFinishModal(null);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleNewOperation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newShipName.trim()) return;
    const filled = parseFloat(newOccupancy);
    if (isNaN(filled) || filled < 0 || filled > 100) return;
    createOperationWithKpi(newShipName.trim(), filled);
    setToastMessage({
      title: "Operation Created",
      description: `Ship ${newShipName} - Initial occupancy: ${filled}%`,
    });
    setNewShipName("");
    setNewOccupancy("");
    setActiveTab("dashboard");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this operation?")) {
      deleteOperation(id);
      setToastMessage({ title: "Operation Deleted", description: "" });
      setTimeout(() => setToastMessage(null), 2000);
    }
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    if (passwordForm.currentPassword !== "password123") {
      setPasswordError("Current password is incorrect.");
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }
    setToastMessage({ title: "Password Updated", description: "Your password has been updated." });
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogout = () => {
    router.push("/login");
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, color: SOLUTION.colors[0] },
    { id: "history", label: "History", icon: History, color: SOLUTION.colors[1] },
    { id: "new", label: "New Operation", icon: PlusCircle, color: SOLUTION.colors[2] },
    { id: "profile", label: "Profile", icon: Lock, color: SOLUTION.colors[3] },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Glassmorphism sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-20" : "w-64"
        } backdrop-blur-xl bg-white/20 border-r border-white/50 shadow-xl p-4 transition-all duration-300 flex flex-col`}
      >
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-2 shadow-lg shrink-0">
            <Ship className="h-6 w-6 text-white" />
          </div>
          {!sidebarCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-[#00b0ff] to-[#45a894] bg-clip-text text-transparent">
              Cargo Master
            </span>
          )}
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/40 shadow-sm text-gray-900"
                    : "text-gray-700 hover:bg-white/30"
                }`}
              >
                <item.icon
                  className="h-5 w-5"
                  style={{ color: isActive ? primaryColor : undefined }}
                />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Button to collapse/expand sidebar */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-white/30 rounded-lg transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
            >
              <polyline points="11 17 6 12 11 7" />
              <polyline points="18 17 13 12 18 7" />
            </svg>
            {!sidebarCollapsed && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Dynamic header with page title and logout button */}
        <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/40 border-b border-white/50 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {activeTab === "dashboard" && "Dashboard"}
              {activeTab === "history" && "History"}
              {activeTab === "new" && "New Operation"}
              {activeTab === "profile" && "Profile"}
            </h1>
            {activeTab === "dashboard" && <p className="text-base text-gray-600 mt-1">Your loading/unloading operations</p>}
            {activeTab === "history" && <p className="text-base text-gray-600 mt-1">Your past operations</p>}
            {activeTab === "new" && <p className="text-base text-gray-600 mt-1">Start a new loading/unloading operation</p>}
            {activeTab === "profile" && <p className="text-base text-gray-600 mt-1">Manage your personal information</p>}
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

        <div className="p-6 md:p-8">
          {/* Toast notification */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-6 right-6 z-50 rounded-xl bg-white/90 backdrop-blur-md p-4 shadow-2xl border border-white/40"
              >
                <p className="font-semibold text-green-800">{toastMessage.title}</p>
                <p className="text-sm text-green-700">{toastMessage.description}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard title="Total Operations" value={operations.length} icon={Activity} color={SOLUTION.colors[0]} />
                <StatCard title="In Progress" value={activeOps.length} icon={Clock} color={SOLUTION.colors[1]} />
                <StatCard title="Completed" value={completedOps.length} icon={Ship} color={SOLUTION.colors[2]} />
              </div>

              <div className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 shadow-lg overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/30 bg-white/40">
                  <h2 className="text-xl font-semibold text-gray-800">Recent Operations</h2>
                  <button
                    onClick={() => setActiveTab("new")}
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm text-white shadow-md transition-all hover:shadow-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <PlusCircle className="h-4 w-4" /> Add
                  </button>
                </div>
                <div className="p-5">
                  {loading ? (
                    <p className="text-gray-500">Loading...</p>
                  ) : operations.length === 0 ? (
                    <p className="text-sm text-gray-500">No operations. Start one now!</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200/50">
                        <thead className="bg-white/40 backdrop-blur-sm">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">Ship</th>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">Status</th>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">Start</th>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">End</th>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">Initial Occupancy</th>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">Final Occupancy</th>
                            <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-600">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200/30 bg-white/30">
                          {operations.slice(0, 10).map((op) => (
                            <tr key={op.id} className="hover:bg-white/40 transition-colors">
                              <td className="whitespace-nowrap px-4 py-3 text-base font-medium text-gray-800">{op.ship_name}</td>
                              <td className="whitespace-nowrap px-4 py-3">
                                <OperationStatusBadge status={op.status} />
                              </td>
                              <td className="whitespace-nowrap px-4 py-3 text-base text-gray-600">
                                {new Date(op.start_time).toLocaleDateString("en-US", {
                                  day: "2-digit",
                                  month: "short",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </td>
                              <td className="whitespace-nowrap px-4 py-3 text-base text-gray-600">
                                {op.end_time
                                  ? new Date(op.end_time).toLocaleDateString("en-US", {
                                      day: "2-digit",
                                      month: "short",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })
                                  : "—"}
                              </td>
                           
                              <td className="whitespace-nowrap px-4 py-3">
                                <div className="flex gap-3">
                                  <button onClick={() => setShowViewModal(op)} className="text-blue-600 hover:text-blue-800 transition">
                                    <Eye className="h-5 w-5" />
                                  </button>
                                  {op.status === "in_progress" && (
                                    <button onClick={() => setShowFinishModal(op)} className="text-green-600 hover:text-green-800 transition">
                                      <Check className="h-5 w-5" />
                                    </button>
                                  )}
                                  <button onClick={() => handleDelete(op.id)} className="text-red-500 hover:text-red-700 transition">
                                    <Trash2 className="h-5 w-5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="space-y-6">
              {loading ? (
                <p className="text-gray-500">Loading...</p>
              ) : operations.filter((o) => o.status === "completed").length === 0 ? (
                <div className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 p-8 text-center text-gray-500">
                  No completed operations
                </div>
              ) : (
                <div className="space-y-5">
                  {operations
                    .filter((o) => o.status === "completed")
                    .map((op) => (
                      <div key={op.id} className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 shadow-lg overflow-hidden transition-all hover:shadow-xl">
                        <div className="border-b border-white/30 px-6 py-4 bg-white/40">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-gray-800">{op.ship_name}</h3>
                            <OperationStatusBadge status={op.status} />
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {new Date(op.start_time).toLocaleDateString("en-US", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            {op.end_time &&
                              ` → ${new Date(op.end_time).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "long",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}`}
                          </p>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                       
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}

          {/* New Operation */}
          {activeTab === "new" && (
            <div className="max-w-lg mx-auto">
              <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="mx-auto rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-3 w-fit mb-4 shadow-md">
                    <PlusCircle className="h-7 w-7 text-blue-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">New Operation</h2>
                  <p className="text-gray-600 mt-1">Start a new loading/unloading operation</p>
                </div>
                <form onSubmit={handleNewOperation} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ship Name</label>
                    <select
                      value={newShipName}
                      onChange={(e) => setNewShipName(e.target.value)}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-300/70 bg-white/60 backdrop-blur-sm px-4 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="" disabled>Select a ship</option>
                      <option value="MV CargoStar">MV CargoStar</option>
                      <option value="PSV-047">PSV-047</option>
                      <option value="PSV Atlas Rover">PSV Atlas Rover</option>
                      <option value="PSV Nordic Wind">PSV Nordic Wind</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Initial Occupancy (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={newOccupancy}
                      onChange={(e) => setNewOccupancy(e.target.value)}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-300/70 bg-white/60 backdrop-blur-sm px-4 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="e.g. 40.0"
                    />
                    <p className="mt-1 text-xs text-gray-500">Visual estimate of current fill level.</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <PlayCircle className="h-5 w-5" />
                    Start Operation
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Profile */}
          {activeTab === "profile" && (
            <div className="max-w-lg mx-auto space-y-6">
              <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 shadow-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto shadow-lg">
                  {CURRENT_MASTER.name.charAt(0)}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{CURRENT_MASTER.name}</h2>
                <p className="text-gray-500 text-base">{CURRENT_MASTER.email}</p>
              </div>
              <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Change Password</h3>
                </div>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Current Password</label>
                    <input
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-300/70 bg-white/60 backdrop-blur-sm px-4 py-2 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-300/70 bg-white/60 backdrop-blur-sm px-4 py-2 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                      required
                      className="mt-1 block w-full rounded-xl border border-gray-300/70 bg-white/60 backdrop-blur-sm px-4 py-2 text-base"
                    />
                  </div>
                  {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                  <button
                    type="submit"
                    className="w-full rounded-xl px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Glassmorphism Modals */}
      <AnimatePresence>
        {showViewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowViewModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-auto border border-white/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-gray-800">Operation Details</h3>
                <button onClick={() => setShowViewModal(null)}><XCircle className="h-6 w-6 text-gray-400 hover:text-gray-600" /></button>
              </div>
              <div className="space-y-4">
                <p className="text-base"><strong className="text-gray-700">Ship:</strong> {showViewModal.ship_name}</p>
                <p className="text-base"><strong className="text-gray-700">Status:</strong> <OperationStatusBadge status={showViewModal.status} /></p>
                <p className="text-base"><strong className="text-gray-700">Start:</strong> {new Date(showViewModal.start_time).toLocaleString("en-US")}</p>
                <p className="text-base"><strong className="text-gray-700">End:</strong> {showViewModal.end_time ? new Date(showViewModal.end_time).toLocaleString("en-US") : "—"}</p>
               
                {showViewModal.alert_message && (
                  <div className="bg-red-100/80 backdrop-blur-sm p-3 rounded-xl text-red-800 text-sm border border-red-200">⚠️ {showViewModal.alert_message}</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {showFinishModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowFinishModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md border border-white/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Operation</h3>
              <p className="text-base text-gray-600 mb-5">Ship: <strong>{showFinishModal.ship_name}</strong></p>
              <form onSubmit={handleFinishOperation} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Final Occupancy (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={finishFilledPercent}
                    onChange={(e) => setFinishFilledPercent(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-xl border border-gray-300/70 bg-white/60 backdrop-blur-sm px-4 py-2 text-base"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-xl py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: accentGreen }}
                  >
                    Confirm & Complete
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowFinishModal(null)}
                    className="flex-1 border border-gray-300/70 bg-white/50 py-2 rounded-xl hover:bg-white/80 transition text-base"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}