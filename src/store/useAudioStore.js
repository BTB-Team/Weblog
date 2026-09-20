import { create } from "zustand";

export const useAudioStore = create((set) => ({
  currentPodcast: null,
  isPlaying: false,
  isLoading: false,
  currentTime: 0,
  duration: 0,
  error: "",

  setCurrentPodcast: (podcast) =>
    set({
      currentPodcast: podcast,
      isPlaying: false,
      isLoading: false,
      currentTime: 0,
      duration: 0,
      error: "",
    }),

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setDuration: (duration) => set({ duration }),
  setError: (error) => set({ error }),
}));
