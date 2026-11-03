import { secondaryBtn } from "./button";
import { Modal } from "./modal";

export function ConfirmDelete({
  name,
  onConfirm,
  onCancel,
}: {
  name: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Modal open={name !== null} title="Delete item?" onClose={onCancel}>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-gray-900">{name}</span> will be
        removed. This can&apos;t be undone.
      </p>
      <div className="mt-5 flex justify-end gap-2">
        <button onClick={onCancel} className={secondaryBtn}>
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded-lg bg-red-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
