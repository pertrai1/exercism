class Bob
  Response = {
    asking: 'Sure.',
    yelling: 'Whoa, chill out!',
    yelling_question: "Calm down, I know what I'm doing!",
    without_asking: 'Fine. Be that way!',
    anything_else: 'Whatever.'
  }
  Asking = -> (r) { r =~ /\?\z/ }
  Yelling = -> (r) { r == r.upcase && r =~ /[A-Z]/ }
  YellingQuestion = -> (r) { Asking[r] && Yelling[r] }
  WithoutQuestion = -> (r) { r.gsub(/\s/, '').empty? }

  def self.hey(phrase)
    Bob.new.hey(phrase)
  end

  def hey(text)
    @phrase = text
    Response[statement_style]
  end

  private

  def statement_style
    case @phrase.strip
    when YellingQuestion
      :yelling_question
    when Yelling
      :yelling
    when WithoutQuestion
      :without_asking
    when Asking
      :asking
    else
      :anything_else
    end
  end
end