console.log("[Created-By] @amex2189 / @EdamAme-x")

Deno.serve(async (req: Request) => {
    const query = (new URL(req.url)).searchParams.get("query") ?? "amex2189";

    const res = await fetch(`https://www.google.com/complete/search?q=${encodeURIComponent(query)}&cp=6&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en&authuser=0&psi=F4ntZc69DNLa1e8PoJ2iwAU.${Date.now().toString()}&dpr=1`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
            "accept-encoding": "identity",
            "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
            "sec-ch-ua-arch": "\"x86\"",
            "sec-ch-ua-bitness": "\"64\"",
            "sec-ch-ua-full-version": "\"100.0.0000.000\"",
            "sec-ch-ua-full-version-list": "\"Not A(Brand\";v=\"99.0.0.0\", \"Google Chrome\";v=\"121.0.6167.212\", \"Chromium\";v=\"121.0.6167.212\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "\"\"",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"10000.00.0\"",
            "sec-ch-ua-wow64": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
        },
        "referrer": "https://www.google.com/",
        "referrerPolicy": "origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });

    const plain = JSON.parse((await res.text()).replace(/\)\]\}\'/, ""));
    return new Response(JSON.stringify(plain), {
        status: 200,
        statusText: "OK",
        body: plain,
        headers: new Headers({
            "Content-Type": "application/json, plain/text; charset=Shift_JIS",
            "Access-Control-Allow-Origin": "*",
            "Content-Disposition": "inline"
        })
    });
});
