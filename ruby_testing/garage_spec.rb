require 'rspec'
require_relative 'garage'
require_relative 'car'

describe Garage do
    it 'it will be born' do
        expect{ Garage.new }.to_not raise_error
    end

    it 'can hold a collection of cars' do
        my_garage = Garage.new 
        my_garage.cars << Car.new('black')
        expect(my_garage.cars).to be_a Array
        expect(my_garage.cars.length).to eq 1
    end
end