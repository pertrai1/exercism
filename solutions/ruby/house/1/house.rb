class House
  def self.recite
    self.new.recite
  end

  def self.verse(x)
    self.new.verse(x)
  end

  NOUNS_and_VERBS = [
    ["malt", "lay in"],
    ["rat", "ate"],
    ["cat", "killed"],
    ["dog", "worried"],
    ["cow with the crumpled horn", "tossed"],
    ["maiden all forlorn", "milked"],
    ["man all tattered and torn", "kissed"],
    ["priest all shaven and shorn", "married"],
    ["rooster that crowed in the morn", "woke"],
    ["farmer sowing his corn", "kept"],
    ["horse and the hound and the horn", "belonged to"]
  ]

  NUMBER_of_VERSES = NOUNS_and_VERBS.size + 1

  def recite
    NUMBER_of_VERSES
      .times
      .map(&method(:verse))
      .join("\n")
  end

  def verse(number)
    format(
      "This is %s the house that Jack built.\n",
      nouns_and_verbs(number)
      .sum("") { |noun, verb| "#{article(noun)}\nthat #{verb} "}
    ).squeeze(" ")
  end

  def article(noun)
    "the #{noun}"
  end

  def nouns_and_verbs(number)
    NOUNS_and_VERBS.take(number).reverse
  end
end
