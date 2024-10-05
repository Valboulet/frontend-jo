import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import LocationList from '../components/locations-section/LocationList';
import apiService from '../services/apiService';

// Mock of apiService
jest.mock('../services/apiService');

// Déefine mock datas for locations
const mockLocations = [
  { id_location: '1', name: 'Paris', image_url: 'http://example.com/paris.jpg' },
  { id_location: '2', name: 'Lyon', image_url: 'http://example.com/lyon.jpg' },
];

describe('LocationList', () => {
  beforeEach(() => {
    // Simulate API response
    (apiService.get as jest.Mock).mockResolvedValueOnce({ data: mockLocations });
  });

  it('displays the locations correctly', async () => {
    render(<LocationList />);

    // Wait for locations to be displayed
    await waitFor(() => {
      expect(screen.getByText('Découvrir les Lieux')).toBeInTheDocument();
      expect(screen.getByText('Paris')).toBeInTheDocument();
      expect(screen.getByText('Lyon')).toBeInTheDocument();
    });
  });
});

