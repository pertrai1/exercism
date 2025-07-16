class IsbnVerifier
  def self.valid?(isbn)
    values = isbn
      .scan(/\d+|X$/)
      .join
      .chars
      .map { |c| c == 'X' ? 10 : c }
      .map(&:to_i)
    return false if values.length != 10
    values
      .map
      .with_index { |value, index| value * (10 - index) }
      .sum % 11 == 0
  end
end