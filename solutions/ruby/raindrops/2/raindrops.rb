class Raindrops
  RAINDROPS = {3 => "Pling", 5 => "Plang", 7 => "Plong"}
  
  def self.convert(number)
    result = RAINDROPS.each_with_object('') do |(key, value), acc|
      acc << value if number % key == 0
    end

    result.empty? ? number.to_s : result
  end
end