import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Inline component with typed errors prop
const TestComponent: React.FC<{ errors: string[] }> = ({ errors }) => {
    return (
        <>
            {errors.map((error: string, index: number) => (
                <div
                    key={`error_${index}`}
                    className="text-center text-red-500 font-semibold"
                >
                    {error}
                </div>
            ))}
        </>
    );
};

describe('TestComponent', () => {
    test('displays the array of errors correctly', () => {
        // Define the array of errors
        const errors: string[] = ['Error 1', 'Error 2', 'Error 3'];

        // Render the TestComponent with the array of errors
        render(<TestComponent errors={errors} />);

        // Verify that each error message is displayed in the DOM
        errors.forEach((error) => {
            const errorElement = screen.getByText(error);
            expect(errorElement).toBeInTheDocument();
        });
    });
});

