module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'D'
    },
    body: p => `
  
    (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


        ${p.at /* parametric position */}
    
        ${''/* THT terminals */}
        (pad 1 thru_hole circle (at 3.81 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.from.str})
        (pad 2 thru_hole rect (at -3.81 0 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.to.str})
        (pad 2 thru_hole rect (at -3.81 1.8 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.to.str})
    )
  
    `


}

