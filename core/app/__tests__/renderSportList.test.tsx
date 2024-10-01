import { render, screen, waitFor } from '@testing-library/react';
import SportList from '../components/sports-section/SportList';
import apiService from '../services/apiService';
import '@testing-library/jest-dom';

// Mock the apiService
jest.mock('../services/apiService', () => ({
  get: jest.fn(),
}));

describe('SportList', () => {
  test('displays the sports after loading', async () => {
    // Simulate the API response
    (apiService.get as jest.Mock).mockResolvedValueOnce({
      data: [
        { id_sport: '1', name: 'Football', pictogram_url: '/images/football.png' },
        { id_sport: '2', name: 'Basketball', pictogram_url: '/images/basketball.png' },
      ],
    });

    // Render the SportList component
    render(<SportList />);

    // Wait for the sports to be displayed
    await waitFor(() => {
      expect(screen.getByText('Football')).toBeInTheDocument(); // Check if "Football" is present
      expect(screen.getByText('Basketball')).toBeInTheDocument(); // Check if "Basketball" is present
    });
  });
});

