import { create } from "zustand";

const url = "/api/visits";

type Store = {
  visits: number;
  setVisits: (id: number) => void;
};

export const useProject = create<Store>()((set) => ({
  visits: 0,
  setVisits: (id) => {
    fetch(url, {
      body: JSON.stringify({ id }),
      method: "post",
    })
      .then((resp) => resp.json())
      .then((json) => set(() => ({ visits: json.data })))
      .catch((error) => {
        console.log(error);
      });
  },
}));
