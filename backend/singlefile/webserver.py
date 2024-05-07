import subprocess
from flask import Flask, request, Response

server = Flask(__name__)

SINGLEFILE_EXECUTABLE = "/usr/src/app/node_modules/single-file-cli/single-file-node.js"
BROWSER_PATH = "/usr/bin/chromium-browser"


@server.route('/', methods=['POST'])
def singlefile():
    url = request.form.get('url')
    if url:
        p = subprocess.Popen([
            "node", SINGLEFILE_EXECUTABLE,
            "--browser-executable-path", BROWSER_PATH,
            request.form['url'],
            '--dump-content',
            ],
            stdout=subprocess.PIPE)
    else:
        return Response('Error: url parameter not found.',
                        status=500)
    singlefile_html = p.stdout.read()
    return Response(
        singlefile_html,
        mimetype="text/html",
    )


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=80)
