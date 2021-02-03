// scheme-model
const db = require('../../data/db-config');


const find = () =>{
    return db('schemes');
}

const findById = id =>{
    return db('schemes')
    .where('id', id)
    .first()
}

const findSteps = id =>{

    
    return db('schemes')
    .join('steps', 'schemes.id', '=', 'steps.scheme_id')
    .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where('schemes.id', id)
}

const add = scheme =>{
    return db('schemes')
    .insert(scheme)
    .then(a => {return findById(a)})
}

const remove = id =>{
    return db('schemes').where('id', id)
    .del()
}

const update = (changes, id) => {
    return db('schemes')
      .where('id', id)
      .update(changes)
      .then(a =>{
          return findById(id);
      })
  }

module.exports = {
    find,
    findById,
    findSteps,
    add,
    remove,
    update
  };