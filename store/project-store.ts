import { create } from "zustand";

interface GroupSiteVisit {
  id: string;
  title: string;
  type: string;
  visits: number;
}

interface VisitStore {
  visits: GroupSiteVisit[];
  fetchVisits: (userId: number) => Promise<void>;
  incrementVisit: (userId: number, groupSiteId: number) => Promise<void>;
  refreshConterVisted: (userId: number) => void;
}

export const useVisitStore = create<VisitStore>((set: any) => ({
  visits: [],

  fetchVisits: async (userId: number) => {
    const res = await fetch(`/api/visits?userId=${userId}`);
    const data = await res.json();
    if (data.success) set({ visits: data.data });
  },

  incrementVisit: async (userId: number, groupSiteId: number) => {
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

  refreshConterVisted(userId: number) {
    fetch(`/api/visits?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) set({ visits: data.data });
      });
  },
}));
