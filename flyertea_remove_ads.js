let body = $response.body;
body=JSON.parse(body);


let ad_url_regex = /^https?:\/\/www\.flyert(ea)?\.com\/source\/plugin\/mobile\/mobile\.php\?module=advis/;




if(ad_url_regex.test($request.url)){
      if (body['Variables'].hasOwnProperty('data')){
      if (body['Variables']['data'].hasOwnProperty('data')){
         body['Variables']['data']['data'] = [];
      }
    }
}

body=JSON.stringify(body);
console.log(body);
$done({body});