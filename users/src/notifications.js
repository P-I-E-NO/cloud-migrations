const { Client } = require("pg");

(async () => {

    // node migration_file.js up/down [test]

    const command = process.argv[2].toLowerCase();

    const conn = new Client({
        connectionString: process.env.NODE_ENV === 'test' ? 
            `postgresql://root@root_db:26257/test_db` :
            process.env.DB_CONNECTION_STRING
    });
    await conn.connect();

    try{

        await conn.query("begin");
        switch(command){

            case "up":
                
                await conn.query(`
                    create table if not exists notifications (
                        id varchar(32) not null primary key,
                        data jsonb not null
                    );
                `);

                await conn.query("commit");

            break;
    
            case "down":
                
                // await conn.query(`alter table users disable trigger all`);
                await conn.query(`drop table if exists notifications cascade;`);
                await conn.query("commit");

            break;
    
            default: throw Error('invalid command');
    
        }

    }catch(err){
        console.log(err);
        await conn.query("rollback");
    }finally{
        await conn.end();
    }


})();