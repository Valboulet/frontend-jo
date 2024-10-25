import { create } from "zustand";

// Define the shape of the store for managing the login modal state
interface LoginModalStore {
    isOpen: boolean;  // Indicates whether the login modal is open or closed
    open: () => void; // Function to open the login modal
    close: () => void; // Function to close the login modal
}

// Create the Zustand store for the login modal
const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false, // Initialize the modal state to closed
    open: () => set({ isOpen: true }), // Update the state to open the modal
    close: () => set({ isOpen: false }) // Update the state to close the modal
}));

export default useLoginModal;
