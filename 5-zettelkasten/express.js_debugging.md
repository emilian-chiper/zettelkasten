### Meta
2024-10-03 21:47
**Tags:** [[javascript]] [[javascript_frameworks]] [[express.js]]
**State:** #completed 

### Debugging Express
To see all the internal logs used in Express, set the `DEBUG` environment variable to `express:*` when launching your app.

```BASH title:debug_express.sh
DEBUG=express:* node index.js
```

Running the command on the default app generated by the express generator prints the following output:

```BASH title:debug_express.sh
DEBUG=express:* node ./bin/www
  express:router:route new / +0ms
  express:router:layer new / +1ms
  express:router:route get / +1ms
  express:router:layer new / +0ms
  express:router:route new / +1ms
  express:router:layer new / +0ms
  express:router:route get / +0ms
  express:router:layer new / +0ms
  express:application compile etag weak +1ms
  express:application compile query parser extended +0ms
  express:application compile trust proxy false +0ms
  express:application booting in development mode +1ms
  express:router use / query +0ms
  express:router:layer new / +0ms
  express:router use / expressInit +0ms
  express:router:layer new / +0ms
  express:router use / favicon +1ms
  express:router:layer new / +0ms
  express:router use / logger +0ms
  express:router:layer new / +0ms
  express:router use / jsonParser +0ms
  express:router:layer new / +1ms
  express:router use / urlencodedParser +0ms
  express:router:layer new / +0ms
  express:router use / cookieParser +0ms
  express:router:layer new / +0ms
  express:router use / stylus +90ms
  express:router:layer new / +0ms
  express:router use / serveStatic +0ms
  express:router:layer new / +0ms
  express:router use / router +0ms
  express:router:layer new / +1ms
  express:router use /users router +0ms
  express:router:layer new /users +0ms
  express:router use / &lt;anonymous&gt; +0ms
  express:router:layer new / +0ms
  express:router use / &lt;anonymous&gt; +0ms
  express:router:layer new / +0ms
  express:router use / &lt;anonymous&gt; +0ms
  express:router:layer new / +0ms
```

When a request is then made to the app, you will see the logs specified in the Express code:

```BASH title:debug_express.sh
    express:router dispatching GET / +4h
  express:router query  : / +2ms
  express:router expressInit  : / +0ms
  express:router favicon  : / +0ms
  express:router logger  : / +1ms
  express:router jsonParser  : / +0ms
  express:router urlencodedParser  : / +1ms
  express:router cookieParser  : / +0ms
  express:router stylus  : / +0ms
  express:router serveStatic  : / +2ms
  express:router router  : / +2ms
  express:router dispatching GET / +1ms
  express:view lookup "index.pug" +338ms
  express:view stat "/projects/example/views/index.pug" +0ms
  express:view render "/projects/example/views/index.pug" +1ms
```

To see the logs only from the router implementation, set the value of `DEBUG` to `express:router`. Likewise, to see logs only from the application implementation, set the value of `DEBUG` to `express:application`, and so on.

#### Applications generated by `express`
An app generated by the `express` command uses the `debug` module and its debug namespace is scoped to the name of the app.

For example, if you generated the app with `$ express sample-app`, you can enable the debug statements with the following command:

```BASH title:debug_express.sh
DEBUG=sample-app:* node ./bin/www
```

You can specify more than one debug namespace by assigning a comma-separated list of names:

```BASH title:debug_express.sh
DEBUG=http,mail,express:* node index.js
```

#### Advanced options
When running through Node.js, you can set a few environment variables that will change the behavior of the debug logging.


| **Name**            | **Purpose**                                      |
| ------------------- | ------------------------------------------------ |
| `DEBUG`             | Enables/disables specific debugging namesapces.  |
| `DEBUG-COLORs`      | Whether or not to use colors in the debug output |
| `DEBUG-DEPTH`       | Object inspection depth.                         |
| `DEBUG_FD`          | File descriptor to write debug output to.        |
| `DEBUG_SHOW_HIDDEN` | Shows hidden properties on inspected objects.    |

**Note:** The environment variables beginning with `DEBUG_` end up being converted into an Options object that gets used with `%o` / `%0` formatters. See the Node.js docs for `util.inspect()` for the complete list.