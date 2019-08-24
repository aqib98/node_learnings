const EventEmitter = require('events');

class WithLog extends EventEmitter{
    execute(taskFunc){
        console.log('Before Executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('after executing');
    }
}

const withLog = new WithLog();

withLog.on('begin',() => console.log("About to execute"));
withLog.on('end',() => console.log('Done with execute'));

withLog.execute(()=>console.log('*** Execute task ***'));