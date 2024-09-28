import apiService from '../services/apiService';

describe('apiService.get', () => {
  beforeEach(() => {
    // Mock the fetch function before each test
    global.fetch = jest.fn();
  });

  afterEach(() => {
    // Reset all mocks after each test
    jest.resetAllMocks();
  });

  it('should return data when the request is successful', async () => {
    const mockResponse = { data: 'Test data' };

    // Mock a successful fetch response with JSON
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse), // Ensure this line has no errors
    });

    const url = '/test-endpoint';
    const result = await apiService.get(url);

    // Verify that fetch was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Check that the returned data matches the expected data
    expect(result).toEqual(mockResponse);
  });

  it('should reject with an error if the request fails', async () => {
    const mockError = new Error('API failed');

    // Mock an error in the fetch call
    (global.fetch as jest.Mock).mockRejectedValue(mockError);

    const url = '/error-endpoint';

    // Use expect(...).rejects.toThrow to test asynchronous errors
    await expect(apiService.get(url)).rejects.toThrow('API failed');

    // Verify that fetch was called with the correct parameters
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  });
});
