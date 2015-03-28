module ApplicationHelper
  def markdown(source)
    Kramdown::Document.new(source).to_html.html_safe
  end

  def highlight(source)
    CodeRay.scan(source, :javascript).div.html_safe
  end
end
