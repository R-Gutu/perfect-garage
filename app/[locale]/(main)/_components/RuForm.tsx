"use client"
import { Bitrix24Form } from "./Bitrix24Form";

export default function RoForm({ className }: { className?: string }) {
  return (
    <Bitrix24Form
      className={`${className}`}
      src='https://cdn-ru.bitrix24.ru/b31886438/crm/form/loader_34.js'
      data='inline/34/jx6uo4'
    />
  );
}
