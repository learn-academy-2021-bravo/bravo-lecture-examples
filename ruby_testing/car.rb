class Car
    attr_accessor :make, :color
    attr_reader :speed

    def initialize color='Unpainted', speed=0
        @color = color
        @speed = speed
    end
    
    def accelerate increase_by
        @speed = @speed + increase_by
    end
    def decelerate decrease_by
        if @speed >= decrease_by
            @speed = @speed - decrease_by
        else
            @speed = 0
        end
    end
end