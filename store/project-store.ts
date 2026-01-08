import { create } from "zustand";

interface GroupSiteVisit {
  id: string;
  title: string;
  type: string;
  visits: number;
}

interface VisitStore {
  visits: GroupSiteVisit[];
  fetchVisits: (userId: string) => Promise<void>;
  incrementVisit: (userId: string, groupSiteId: number) => Promise<void>;
}

export const useVisitStore = create<VisitStore>((set) => ({
  visits: [],

  fetchVisits: async (userId) => {
    const res = await fetch(`/api/visits?userId=${userId}`);
    const data = await res.json();
    if (data.success) set({ visits: data.data });
  },

  incrementVisit: async (userId, groupSiteId) => {
    const res = await fetch(`/api/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, groupSiteId }),
    });

    const data = await res.json();
    if (data.success) {
      // refresh les visites après update
      const refresh = await fetch(`/api/visits?userId=${userId}`);
      const refreshedData = await refresh.json();
      if (refreshedData.success) set({ visits: refreshedData.data });
    }
  },
}));
