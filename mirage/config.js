export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.urlPrefix = 'http://107.21.177.120:8080';
  this.namespace = '/stock-service';
  
  this.get('/health', function() {
    return {
      status: 'UP',
      diskSpace: {
        status: 'UP',
        total: 8318783488,
        free: 6311837696,
        threshold: 10485760
      },
      elasticsearch: {
        status: 'UP',
        clusterName: 'elasticsearch',
        numberOfNodes: 1,
        numberOfDataNodes: 1,
        activePrimaryShards: 0,
        activeShards: 0,
        relocatingShards: 0,
        initializingShards: 0,
        unassignedShards: 0
      }
    }
  });

  this.get('/env', function() {
    return {
      systemEnvironment: {
        PATH: '/sbin:/usr/sbin:/bin:/usr/bin',
        NLSPATH: '/usr/dt/lib/nls/msg/%L/%N.cat',
        TERM: 'xterm-256color',
        XFILESEARCHPATH: '/usr/dt/app-defaults/%L/Dt',
        PWD: '/',
        SHLVL: '1',
        _: '/usr/bin/nohup'
      }
    }
  });

  this.get('/metrics', function() {
    return {
      'mem': 153147,
      'mem.free': 21217,
      'threads': 29,
      'threads.peak': 29,
      'threads.daemon': 27
    }
  });
}
