const {model,Schema} = require("mongoose");
const PLM = require("passport-local-mongoose");

const UserSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type:String,
      enum: ['MEDICO', 'EMPLEADO', 'PACIENTE'],
      default: 'EMPLEADO'
    },
    fotoPerfil: {
      type: String
    },
    peso: [Number],
    talla: [Number],
    IMC: [Number],
    porcentajeGrasa: [Number],
    porcentajeMusculo: [Number],
    indiceCinturaCadera: [Number],
    MetabolismoBasalEnReposo: [Number],
    fotosProgreso: [String]
  },
  { timestamps: true }
);


UserSchema.plugin(PLM, {
  usernameField: "email"
});

module.exports = model("User", UserSchema);