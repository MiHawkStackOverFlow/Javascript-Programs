# introduction to html

1. You'll sometimes see attributes written without values — this is perfectly allowed. These are called boolean attributes, and they can only have one value, which is generally the same as the attribute name. As an example, take the disabled attribute, which you can assign to form input elements if you want them to be disabled so the user can't enter any data in them.
e.g, 
    <input type="text" disabled="disabled">
    <input type="text" disabled>
    <input type="text">
    
2. Always include quotes("") around attributes
e.g,
    <a href="https://www.mozilla.org/" title="The Mozilla homepage">favourite website</a>
    
3. Modern browsers generally try to render HTML content according to the W3C recommendations. However, to provide compatibility with older web pages, and to provide additional "intuitive" functionality, all browsers support an alternative "quirks mode".
   Generally, quirks mode is turned on when there is no correct DOCTYPE declaration, and turned off when there is a DOCTYPE definition. However, invalid HTML - with respect to the chosen DOCTYPE - can also cause the browser to switch to quirks mode.

4. The <title> element contents are also used in other ways. For example, if you try bookmarking the page (Bookmarks > Bookmark This Page or the star icon in the URL bar in Firefox), you will see the <title> contents filled in as the suggested bookmark name.
    
5. <meta charset="utf-8">
   This element simply specifies the document's character encoding — the character set that the document is permitted to use. utf-8 is a universal character set that includes pretty much any character from any human language. This means that your web page will be able to handle displaying any language; it's therefore a good idea to set this on every web page you create! For example, your page could handle English and Japanese just fine

6. HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.

You should include the following <meta> viewport element in all your web pages:

<meta name="viewport" content="width=device-width, initial-scale=1.0">
A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.

The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

7. Some more examples of meta tags :-
<title>ESPNcricinfo - Cricket Live Scores, Stats, Schedules, Fixtures & News</title>

<meta name="news_keywords" content="ESPN, cricinfo, cricket scores, cricket schedules, match commentary, cricket teams, cricket stats, cricket fixtures, series results, video highlights, cricket news" />

<meta name="keywords" content="ESPN, cricinfo, cricket scores, cricket schedules, match commentary, cricket teams, cricket stats, cricket fixtures, series results, video highlights, cricket news" />

8. Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines (such activities are termed Search Engine Optimization, or SEO.)
   <meta name="description" content="Get cricket scores, schedules, match commentary, team stats, fixtures, series results, video highlights, news, and more on ESPNcricinfo." />

9.  Open Graph Data is a metadata protocol that Facebook invented to provide richer metadata for websites. In the MDN Web Docs sourcecode, you'll find this:

<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">

One effect of this is that when you link to MDN Web Docs on facebook, the link appears along with an image and description: a richer experience for users.

10. When linking to a resource that will be downloaded (like a PDF or Word document) or streamed (like video or audio) or has another potentially unexpected effect (opens a popup window, or loads a Flash movie), you should add clear wording to reduce any confusion. It can be quite annoying for example

<p><a href="http://www.example.com/large-report.pdf">
  Download the sales report (PDF, 10MB)
</a></p>

<p><a href="http://www.example.com/video-stream/">
  Watch the video (stream opens in separate tab, HD quality)
</a></p>

<p><a href="http://www.example.com/car-game">
  Play the car game (requires Flash)
</a></p>

11. When you are linking to a resource that is to be downloaded rather than opened in the browser, you can use the download attribute to provide a default save filename. Here's an example with a download link to the Windows version of Firefox 39:

<a href="https://download.mozilla.org/?product=firefox-39.0-SSL&os=win&lang=en-US"
   download="firefox-39-installer.exe">
  Download Firefox 39 for Windows
</a>

12. Description lists:- The purpose of these lists is to mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers. Let's look at an example of a set of terms and definitions:

<dl>
  <dt>soliloquy</dt>
  <dd>In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)</dd>
  <dt>monologue</dt>
  <dd>In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.</dd>
  <dt>aside</dt>
  <dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought, or piece of additional background information.</dd>
</dl>


13. If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere else, you should wrap it inside a <blockquote> element to signify this, and include a URL pointing to the source of the quote inside a cite attribute. For example, the following markup is taken from the MDN <blockquote> element page:
    
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>

14. The content of the cite attribute sounds useful, but unfortunately browsers, screenreaders, etc. don't really do much with it. There is no way to get the browser to display the contents of cite, without writing your own solution using JavaScript or CSS. If you want to make the source of the quotation available on the page, a better way to mark it up is put the <cite> element next to (or inside) the quote element. This is really meant to contain the name of the quote source — i.e. the name of the book, or name of the person that said the quote — but there is no reason why you couldn't link the text inside <cite> to the quote source in some way:
    
<p>According to the 
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
        <cite>MDN blockquote page</cite>
    </a>:
</p>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>

<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q> -- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
<cite>MDN q page</cite></a>.</p>

15. Another fairly common element you'll meet when looking around the Web is <abbr> — this is used to wrap around an abbreviation or acronym, and provide a full expansion of the term (included inside a title attribute.) Let's look at a couple of examples:
    
    <p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>
    
16. HTML has an element for marking up contact details — <address>. This simply wraps around your contact details. One thing to remember however is that the <address> element is meant for marking up the contact details of the person who wrote the HTML document, not any address. So the above would only be ok if Chris had written the document the markup appears on.
    
<address>
  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>

17. You will occasionally need to use superscript and subscript when marking up items like dates, chemical formulae, and mathematical equations so they have the correct meaning. The <sup> and <sub> elements handle this job. For example:
    
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>

18. There are a number of elements available for marking up computer code using HTML:

<code>: For marking up generic pieces of computer code.
<pre>: For retaining whitespace (generally code blocks) — if you use indentation or excess whitespace inside your text, browsers will ignore it and you will not see it on your rendered page. If you wrap the text in <pre></pre> tags however, your whitespace will be rendered identically to how you see it in your text editor.
<var>: For specifically marking up variable names.
<kbd>: For marking up keyboard (and other types of) input entered into the computer.
<samp>: For marking up the output of a computer program.
Let's look at a few examples. You should try having a play with these (try grabbing a copy of our other-semantics.html sample file):

<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>You shouldn't use presentational elements like <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>.</p>

<p>In the above JavaScript example, <var>para</var> represents a paragraph element.</p>


<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>

19. HTML also provides the <time> element for marking up times and dates in a machine-readable format. For example:
    
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset-->
<time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
<!-- Calling out a specific week number-->
<time datetime="2016-W04">The fourth week of 2016</time>
    
    
    
    


