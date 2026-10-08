import { useEffect, useState } from "react";
import { ArrowRight, Check, Pencil, UserRound, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
    const { user, updateProfile } = useAuth();
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
    } = useForm({ defaultValues: { full_name: user?.full_name || "" } });

    useEffect(() => {
        reset({ full_name: user?.full_name || "" });
    }, [user, reset]);

    function cancelEdit() {
        reset({ full_name: user.full_name || "" });
        setEditing(false);
        setMessage("");
    }

    function saveProfile(values) {
        updateProfile({ full_name: values.full_name.trim() });
        reset({ full_name: values.full_name.trim() });
        setEditing(false);
        setMessage("Your profile name was saved on this device.");
    }

    if (!user) {
        return (
            <section className="page empty-state my-10">
                <h2>Log in to view your profile</h2>
                <p className="mb-5">Your account details will appear here.</p>
                <a href="#/login" className="btn">
                    Log in <ArrowRight size={15} />
                </a>
            </section>
        );
    }

    return (
        <section className="page mx-auto max-w-4xl">
            <span className="eyebrow">YOUR ACCOUNT</span>
            <h1 className="page-title">Profile</h1>
            <p className="mb-8 max-w-xl text-sm text-muted">
                Review your account details and keep your name up to date.
            </p>

            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
                <aside className="flex min-h-56 flex-col justify-between rounded-2xl bg-linear-to-br from-leaf-900 to-forest p-6 text-white shadow-soft">
                    <span className="grid size-14 place-items-center rounded-full bg-lime text-forest">
                        <UserRound size={26} />
                    </span>
                    <div className="mt-8 min-w-0">
                        <p className="truncate font-display text-2xl font-semibold">
                            {user.full_name || "Fresh Mart customer"}
                        </p>
                        <p className="mt-1 break-all text-sm text-white/70">{user.email}</p>
                    </div>
                </aside>

                <form
                    onSubmit={handleSubmit(saveProfile)}
                    className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
                >
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl">Personal information</h2>
                            <p className="mt-1 text-xs text-muted">
                                Your email address cannot be changed here.
                            </p>
                        </div>
                        {!editing && (
                            <button
                                type="button"
                                className="btn-ghost shrink-0 px-3 py-2 text-xs"
                                onClick={() => {
                                    setMessage("");
                                    setEditing(true);
                                }}
                            >
                                <Pencil size={14} /> Edit
                            </button>
                        )}
                    </div>

                    {message && <p className="notice-success mt-0">{message}</p>}

                    <div className="grid gap-5">
                        <label className="field">
                            Full name
                            <input
                                className="input"
                                autoComplete="name"
                                maxLength={150}
                                readOnly={!editing}
                                aria-invalid={!!errors.full_name}
                                {...register("full_name", {
                                    required: "Enter your name.",
                                    validate: (value) =>
                                        value.trim().length >= 2 || "Name must be at least 2 characters.",
                                    maxLength: {
                                        value: 150,
                                        message: "Name must be 150 characters or fewer.",
                                    },
                                })}
                            />
                            {errors.full_name && (
                                <small role="alert" className="text-clay">
                                    {errors.full_name.message}
                                </small>
                            )}
                        </label>
                        <label className="field">
                            Email address
                            <input className="input bg-mist/60" value={user.email} readOnly />
                        </label>
                    </div>

                    {editing && (
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <button
                                type="button"
                                className="btn-ghost px-4 py-2.5 text-xs"
                                onClick={cancelEdit}
                            >
                                <X size={14} /> Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn px-4 py-2.5 text-xs"
                                disabled={!isDirty}
                            >
                                <Check size={14} /> Save changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
