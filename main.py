from cmsimde import flaskapp
from gevent.pywsgi import WSGIServer

#flaskapp.app.run(host="0.0.0.0", debug=True)
http_server = WSGIServer(('0.0.0.0', 8081), flaskapp.app)
http_server.serve_forever()<iframe width="560" height="315" 