import { View, TextInput } from "react-native";
import { useState } from "react";

import styles from "./styles";

function Header({ onFilterChange }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (text) => {
    setFilter(text);
    onFilterChange(text); 
  };

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Search here"
        value={filter}
        onChangeText={handleFilterChange}
      />
    </View>
  );
}

export default Header;