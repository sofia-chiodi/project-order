import './input.css';

export default function Input({ label, id, ...props }) {
  return (
    <p className='inputs'>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </p>
  );
}
