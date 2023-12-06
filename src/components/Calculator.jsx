import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { motion } from "framer-motion";
import { Active, Delete, Disabled, Plus } from "./Actions";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [rows, setRows] = useState([]);

  //   aggiunta riga
  const handleAddRow = () => {
    setRows([...rows, { operator: "+", value: 0, enabled: true }]);
  };

  //   rimozione riga
  const handleRemoveRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  //   check operatore
  const handleOperation = (index, newOperator) => {
    const newRows = [...rows];
    newRows[index].operator = newOperator;
    setRows(newRows);
  };

  //   cambio operatore
  const handleValueChange = (index, newValue) => {
    const newRows = [...rows];
    newRows[index].value = Number(newValue) || 0;
    setRows(newRows);
  };

  //   abilitato / disabilitato
  const handleToggleRow = (index) => {
    const newRows = [...rows];
    newRows[index].enabled = !newRows[index].enabled;
    setRows(newRows);
  };

  useEffect(() => {
    // CALCOLO
    const result = rows.reduce((operator, row) => {
      if (row.enabled) {
        return row.operator === "+"
          ? operator + row.value
          : operator - row.value;
      }
      return operator;
    }, 0);

    setResult(result);
  }, [rows]);

  if (rows.length > 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 50 }}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-5 items-center justify-between -mb-24 bg-slate-300 rounded-md p-2">
          <p className="text-3xl">
            Risultato: <span className="font-bold">{result} </span>
          </p>
          <Button label={<Plus />} variant="add" onClick={handleAddRow} />
        </div>
        {rows.map((row, index) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 100 }}
            key={index}
            className="flex gap-2"
          >
            {/* SELECT OPERATORE */}
            <Select
              disabled={!row.enabled}
              value={row.operator}
              onChange={(e) => handleOperation(index, e.target.value)}
            />
            {/* INPUT NUMERICO */}
            <Input
              value={row.value}
              onChange={(e) => handleValueChange(index, e.target.value)}
              disabled={!row.enabled}
            />
            {/* BOTTTONI */}
            <Button
              label={row.enabled ? <Active /> : <Disabled />}
              variant={row.enabled ? "enabled" : "disabled"}
              onClick={() => handleToggleRow(index)}
            />
            <Button
              label={<Delete />}
              variant="delete"
              onClick={() => handleRemoveRow(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  } else {
    // SE NON CI SONO RIGHE
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-5"
      >
        <Button label="Aggiungi riga" variant="add" onClick={handleAddRow} />
        <h2 className="font-bold text-2xl text-center">
          Aggiungi una riga per cominciare
        </h2>
      </motion.div>
    );
  }
};

export default Calculator;
