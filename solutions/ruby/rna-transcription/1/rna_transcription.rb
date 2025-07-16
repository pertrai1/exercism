class Complement
  DNA_RNA_MAP = {
    :"G" => "C",
    :"C" => "G",
    :"T" => "A",
    :"A" => "U"
  }
  def self.of_dna(strand)
    strand.split("").map{ |letter| DNA_RNA_MAP[letter.to_sym] || "" }.join("")
  end
end
