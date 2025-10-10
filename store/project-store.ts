import { create } from "zustand";

const url = "localhost://3000/api/visits";

type Store = {
  visits: number;
  setVisits: () => void;
};

export const useProject = create<Store>()((set) => ({
  visits: 0,
  setVisits() {
    fetch(url, {
      method: "post",
    })
      .then((resp) => resp.json())
      .then((json) => set(() => ({ visits: json.visits })))
      .catch((error) => {
        console.log(error);
      });
  },
}));
