import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

console.log('start')

const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

await db.migrate()

//Creating a function that returns all the greetings from the database
export async function getGreetings(){  //the 'async' enables the function to use await as it is now asynchronous
    const result = await db.all(`select * from greetings`);
    return result
}

// const result = await getGreetings()
// console.log(result)

//Creating a functionthat will add a new greeting using AWAIT
export async function addGreeting(language, greeting){
    const sql = `insert into greetings (language, greeting) values(?, ?)` //we are using question marks to make the parameters dynamic
    await db.run(sql, [language, greeting]);

}

// const result1 = await getGreetings()
// console.log(result1)

// console.log('======BREAKER=======')

// await addGreeting('Russian', 'Privyet')

// console.log('======BREAKER=======')

// const result2 = await getGreetings()
// console.log(result2)

//Creating a function that will delete a greting using AWAIT

export async function deleteGreeting(id){
    const sql = `delete from greetings where id = ?`;
    await db.run(sql, [id])
}
await deleteGreeting(7)

// const deleteResult= await getGreetings()
// console.log(deleteResult)


//Updating the values in a table  
export async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language = ?, greeting = ? where id = ? `;
    await db.run (sql, [language, greeting, id])   
}

await updateGreeting('Spanish', 'Ole', 5)

 console.log('======BREAKER=======')

const result2 = await getGreetings()
 console.log(result2)



//Run end 
console.log('end')



/*
//Calling the query using an await

const result = await db.all(`select * from greetings`)
console.log(result)

const countResult = await db.get(`select count(*) as count from greetings`);
console.log(countResult.count)

//Calling the query using a promise 

db
    .all(`select * from greetings`)
    .then(result =>{
        console.log(result)
    })

*/