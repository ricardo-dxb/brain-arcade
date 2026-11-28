import os, json
css=open('app.css').read(); core=open('gens.js').read()+'\n'+open('hard.js').read()+'\n'+open('sci.js').read()+'\n'+open('dinoart.js').read()+'\n'+open('dino.js').read()+'\n'+open('pers.js').read()+'\n'+open('app.js').read()
FONTS='https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;700;800&display=swap'
def page(standalone):
    js='{\nconst STANDALONE='+('true' if standalone else 'false')+';\n'+core+'\n}'
    assert '</script' not in js.lower() and '<!--' not in js
    extra=('<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">'
           '<meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Brain Arcade">'
           '<meta name="theme-color" content="#5ec8f2"><meta name="robots" content="noindex,nofollow">'
           '<link rel="apple-touch-icon" href="icon-180.png"><link rel="icon" href="icon-180.png"><link rel="manifest" href="manifest.json">') if standalone else ''
    return f'''<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Brain Arcade</title>{extra}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="{FONTS}" rel="stylesheet"><style id="css">{css}</style></head><body><div id="root"></div><script id="state" type="application/json">{{}}</script><script id="app">{js}</script></body></html>'''
open('index.html','w').write(page(False))
os.makedirs('site',exist_ok=True)
open('site/index.html','w').write(page(True))
json.dump({"name":"Brain Arcade","short_name":"Brain Arcade","start_url":"./","display":"standalone","background_color":"#5ec8f2","theme_color":"#5ec8f2","icons":[{"src":"icon-180.png","sizes":"180x180","type":"image/png"},{"src":"icon-512.png","sizes":"512x512","type":"image/png"}]},open('site/manifest.json','w'))
open('site/robots.txt','w').write('User-agent: *\nDisallow: /\n')
print(len(open('site/index.html').read()))
