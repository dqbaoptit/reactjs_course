import { motion } from 'framer-motion';

const Card = () => {
  return <div></div>;
};
export default function Home() {
  return (
    <>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          width: '100%',
          height: '100%',
        }}
      ></motion.div>
    </>
  );
}
