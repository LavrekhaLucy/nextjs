import styles from "./page.module.css";
import Form from "next/form";
import {SaveAction} from "@/server-actions/ServerActions";

export default function Home() {
  return (
    <div className={styles.page}>


      <Form action={SaveAction}>
        <input type='text' name='brand' placeholder='Brand' />
        <input type='text' name='year' placeholder='Year' />
        <button type="submit">Save</button>

      </Form>
    </div>
  );
}
