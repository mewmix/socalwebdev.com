$(document).ready(
  function() {
    $("#terminal").focus();
    result = '<br>';
  }
)

$(document).keyup(
  function(e) {
    if (e.keyCode == 13) {
      var result = $('#label').html();
      var root = "root@resume-web-aklein% ";
      var tmp = $("#terminal").val().toUpperCase();
      root = root + tmp;
      $('#terminal').val('');
      result = result + root;

         switch (tmp) {
      case 'HELP':
        result = result + '<br>	HELP &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Display a list of available commands.<br>\
										CONTACT &nbsp&nbsp&nbsp&nbsp&nbsp Display contact information.<br>\
										SKILLS &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Display skills.<br>\
										EDUCATION &nbsp&nbsp Display education.<br>\
										PERSONALINFO &nbsp&nbsp Display personal information.<br>\
										EXPERIENCE &nbsp&nbsp Display experience.<br>\
										CLEAR &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Clear the console.<br>\
										LINKS &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Display social media links.<br>\
										PROJECTS &nbsp&nbsp&nbsp&nbsp Display a list of projects that the website creator has worked on.<br>';
        break;

 

      case 'SKILLS':
        result = result + '<br>	LANGUAGES:<br>\
											&nbsp&nbspEnglish: Written & Oral<br>\
&nbsp&nbspMandarin Chinese: Written & Oral<br>\
										PROGRAMMING LANGUAGES:<br>\
											&nbsp&nbspPython, Rust, GO, HTML, CSS, Javascript, PHP, MySQL/SQL, Solidity, Vyper, <br>\
										AI / ML SOFTWARE USED:<br>\
											&nbsp&nbspHuggingFace, Tortoise, BARK, BERT, ControlNet,  StableDiffusion, Llama, Vicuna, OpenAI GPT3.5 & 4 API<br>\
										SOFTWARE TESTING:<br>\
										';
        break;

      case 'EDUCATION':
        result = result + '<br>	2009-2011 Irvine Valley College - Mandarin Chinese / Administration of Justice<br>';
        break;

      case 'PERSONALINFO':
        var birthday = +new Date('1991-11-30');
        var age = ((Date.now() - birthday) / (31557600000));
        result = result + '<br>	FIRST NAME: Alexander<br>\
										LAST NAME: Klein<br>\
										PROFESSION: Full Stack Support Engineer<br>\
										AGE: ' + age.toFixed() + ' years old<br>\
										NATIONALITY: American<br>\
										DRIVER\'S LICENSE: CA Class C<br>';
        break;

case 'EXPERIENCE':
  result = result + '<br>September 2021 - November 2022:<br>\
                    &nbsp&nbspAssociate Support Engineer at Facings.IO<br>\
                    &nbsp&nbsp&nbsp&nbspFront and back-end development and operational support. Contributed to on-chain deployments of large-scale custom NFT collections & games to market via microsites. Daily work in fast paced environment with an emphasis on Python & JavaScript, Docker, as well as some C++. Deployed React-based applications to AWS S3 via CI pipelines and blockchain specific tools such as Anchor Wallet / Meta Mask, Brownie, Truffle, Web3.js and Web3.py (and eospyo). Performed testing and debugging of the company’s python signing library eospyo(now called pyntelope).<br>\
                    <br>\
                  August 2019 - August 2022:<br>\
                    &nbsp&nbspIndependent Contractor<br>\
                    &nbsp&nbsp&nbsp&nbspProvided custom technical solutions and support for a broad range of small to medium businesses (SMB). Using a data-driven approach, optimized client websites, web applications and platforms by improving workflows, creating documentation, and refining existing code. Experience with Linux Administration, React, Node.js, Apache, Nginx, AWS, GCP, Azure, IBM cloud, Righetti QVM, Python, Selenium, WordPress, MySQL, NoSQL, GraphQL, SQLite, and more.<br>';
  break;


      case 'CLEAR':
        result = '';
        break;

        case 'CONTACT':
  result = result + '<br> <a href="https://www.linkedin.com/in/alexanderjamesklein/" onclick="window.open(this.href); return false;">LinkedIn &larr;</a><br>\
            <a href="https://github.com/mewmix" onclick="window.open(this.href); return false;">GitHub &larr;</a><br>\
            <a href="https://twitter.com/mylife4thehorde" onclick="window.open(this.href); return false;">Twitter &larr;</a><br>\
            <a href="https://t.me/s/ze_rg" onclick="window.open(this.href); return false;">Telegram &larr;</a><br>\

            <a href="https://staging.bsky.app/profile/socalwebdev.com" onclick="window.open(this.href); return false;">BlueSky &larr;</a><br>\
            <a href="https://www.socalwebdev.com" onclick="window.open(this.href); return false;">Website &larr;</a><br>';
  break;

case 'PROJECTS':
  result = result + '<br> Sample project 1<br>\
            Sample project 2<br>\
            Sample project 3<br>';
  break;

case 'exit':
  void window.close();
  break;
             
 case 'QUERY':
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/CarperAI/stable-vicuna-13b-delta",
      {
        headers: { Authorization: "Bearer " },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  query({"inputs": "Can you please let us know more details about your "}).then((response) => {
    console.log(JSON.stringify(response));
  });
  break;
            

case '':
  result = result;
  break;

default:
  result = result + '<br>' + tmp + ' is not recognized as a command.<br>';
  break;}

      result = result + '<br>';
      $('#label').html(result);
      $('html, body').animate({
        scrollTop: $("#terminal").offset().top
      }, 1);
    }
  }
)