import { render, screen, fireEvent } from '@testing-library/react';
import SelectedSport from '../evenements/page';
import '@testing-library/jest-dom'

jest.mock('../components/events-page/filters/SportFilter', () => {
  return jest.fn(({ onSportSelect }) => (
    <button onClick={() => onSportSelect({ id_sport: '1', name: 'Taekwondo' })}>
      Select Taekwondo
    </button>
  ));
});

jest.mock('../components/events-page/EventList', () => {
  return jest.fn(({ selectedSport }) => (
    <div>
      {selectedSport ? selectedSport.name : 'No Sport Selected'}
    </div>
  ));
});

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => null), // No sport is selected by default
  })),
}));

describe('SelectedSport', () => {
  beforeEach(() => {
    render(<SelectedSport />);
  });

  it('renders the title and description', () => {
    // Check for the title
    expect(screen.getByText(/Sélectionnez vos tickets/i)).toBeInTheDocument();
    // Check for the description
    expect(screen.getByText(/Rechercher par sport/i)).toBeInTheDocument();
  });

  it('renders SportFilter and selects sport', () => {
    // Check if the select button is present
    const button = screen.getByRole('button', { name: /Select Taekwondo/i });
    expect(button).toBeInTheDocument();
    
    // Simulate a click on the button
    fireEvent.click(button);
    
    // Check if the name of the selected sport is displayed
    expect(screen.getByText('Taekwondo')).toBeInTheDocument();
  });
});

