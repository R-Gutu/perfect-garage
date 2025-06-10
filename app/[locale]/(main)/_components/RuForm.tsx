"use client"
import { Bitrix24Form } from "./Bitrix24Form";

export default function RuForm({ className }: {className?: string}) {
  return (
    <Bitrix24Form
      className={`${className}`}
      src='https://cdn-ru.bitrix24.ru/b31886438/crm/form/loader_16.js'
      data='inline/16/dhirfh'
    />
  );
}
