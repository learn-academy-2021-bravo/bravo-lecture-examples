require 'rspec'
require_relative 'car'

describe 'Car' do

    it 'can be instantiated' do
        expect{ Car.new }.to_not raise_error
    end

    it 'has a make' do
        my_car = Car.new
        my_car.make = 'Subaru'
        expect(my_car.make).to be_a String
        expect(my_car.make).to eq 'Subaru'
    end
    it 'can be unpainted by default' do
        my_car = Car.new
        expect(my_car.color).to be_a String
        expect(my_car.color).to eq 'Unpainted'
    end

    it 'can be painted' do
        my_new_subaru = Car.new('Gyser Blue')
        expect(my_new_subaru.color).to be_a String
        expect(my_new_subaru.color).to eq 'Gyser Blue'
    end

    it 'has a speed' do
        my_car = Car.new
        expect(my_car.speed).to be 0
        expect(my_car.speed).to be_a Numeric
    end

    it 'can accelerate' do
        my_car = Car.new 
        my_car.accelerate 10
        expect(my_car.speed).to be 10
    end
    it 'can decelerate' do
        my_car = Car.new 
        my_car.accelerate 20
        expect{ my_car.decelerate 10 }.to change{ my_car.speed}.from(20).to(10)
    end

end