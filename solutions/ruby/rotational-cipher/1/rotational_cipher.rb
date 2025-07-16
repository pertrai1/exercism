class RotationalCipher
  ROT_TABLE = ("a".."z").to_a + ("A".."Z").to_a
  
  def self.rotate(s, rot)
    return s if rot == 0

    s.each_char.sum("") do |x|
      i = ROT_TABLE.index(x)
      next x if i.nil?

      ROT_TABLE[
        ((i + rot) % 26) \
          + (i >= 26 ? 26 : 0)
      ]
    end
  end
end