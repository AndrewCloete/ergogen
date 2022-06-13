// TRRS-PJ-320A-dual
//     _________________
//    | (1)     (3) (4)|
//    |                |
//    |___(2)__________|
//
// Nets
//    A: corresponds to pin 1
//    B: corresponds to pin 2
//    C: corresponds to pin 3
//    D: corresponds to pin 4
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    symmetric: default is false
//      if true, will only work if reverse is also true
//      this will cause the footprint to be symmetrical on each half
//      pins 1 and 2 must be identical if symmetric is true, as they will overlap


const len = 14
const width = 5.5
const pin_space = 3.5
const half_w = width/2

module.exports = {
  nets: {
    GND: undefined,
    Signal: undefined,
    VCC: undefined,
  },
  params: {
    class: 'TRRS',
    reverse: false,
    symmetric: false
  },
  body: p => {
    return `
      (module TRRS-PJ-320A-dual (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference REF** (at 0 14.2) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value TRRS-PJ-320A-dual (at 0 -5.6) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start 0 0) (end 0 ${len}) (layer Dwgs.User) (width 0.15))
      (fp_line (start 0 ${len}) (end ${width} ${len}) (layer Dwgs.User) (width 0.15))
      (fp_line (start ${width} ${len}) (end ${width} 0) (layer Dwgs.User) (width 0.15))
      (fp_line (start ${width} 0) (end 0 0) (layer Dwgs.User) (width 0.15))

      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at ${half_w} ${pin_space}) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at ${half_w} ${pin_space*3-1}) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))

      (pad 1 thru_hole oval (at 0        ${pin_space} ${p.rot}) (size 1.6 2.2) (drill oval 0.9 1.5) (layers *.Cu *.Mask) ${p.net.GND.str})
      (pad 1 thru_hole oval (at ${width} ${pin_space} ${p.rot}) (size 1.6 2.2) (drill oval 0.9 1.5) (layers *.Cu *.Mask) ${p.net.GND.str})
      (pad 1 thru_hole oval (at 0        ${pin_space*2} ${p.rot}) (size 1.6 2.2) (drill oval 0.9 1.5) (layers *.Cu *.Mask) ${p.net.Signal.str})
      (pad 1 thru_hole oval (at ${width} ${pin_space*2} ${p.rot}) (size 1.6 2.2) (drill oval 0.9 1.5) (layers *.Cu *.Mask) ${p.net.Signal.str})
      (pad 1 thru_hole oval (at 0        ${pin_space*3} ${p.rot}) (size 1.6 2.2) (drill oval 0.9 1.5) (layers *.Cu *.Mask) ${p.net.VCC.str})
      (pad 1 thru_hole oval (at ${width} ${pin_space*3} ${p.rot}) (size 1.6 2.2) (drill oval 0.9 1.5) (layers *.Cu *.Mask) ${p.net.VCC.str}))
      `
  }
}
