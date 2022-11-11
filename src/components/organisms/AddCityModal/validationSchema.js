import * as yup from 'yup';
export default yup.object().shape({
  cityName: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Only characters')
    .required('City name is required.'),
});
