import { create } from "zustand";

// Define the shape of the store for managing the sign-up modal state
interface SignUpModalStore {
    isOpen: boolean;  // Indicates whether the sign-up modal is open or closed
    open: () => void; // Function to open the sign-up modal
    close: () => void; // Function to close the sign-up modal
}

// Create the Zustand store for the sign-up modal
const useSignUpModal = create<SignUpModalStore>((set) => ({
    isOpen: false, // Initialize the modal state to closed
    open: () => set({ isOpen: true }), // Update the state to open the modal
    close: () => set({ isOpen: false }) // Update the state to close the modal
}));

export default useSignUpModal;
