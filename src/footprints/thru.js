module.exports = {
    nets: {
        net: undefined,
    },
    params: {
        class: 'D'
    },
    body: p => `
  
    (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


        ${p.at /* parametric position */}
    
        ${''/* THT terminals */}
        (pad 1 thru_hole circle (at 0 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.net.str})
    )
  
    `


}

