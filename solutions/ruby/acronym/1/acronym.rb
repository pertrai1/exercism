class Acronym
  def self.abbreviate(name)
    name.split(/[- ]+/).map(&:chr).join.upcase
  end
end