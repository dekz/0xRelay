// Type definitions for cqrs-domain 2.9
// Project: https://github.com/adrai/node-cqrs-domain
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cqrs_domain;

declare function cqrs_domain(options: any): any;

declare namespace cqrs_domain {
    const prototype: {
    };

    function defineAggregate(...args: any[]): any;

    function defineBusinessRule(...args: any[]): any;

    function defineCommand(...args: any[]): any;

    function defineCommandHandler(...args: any[]): any;

    function defineContext(...args: any[]): any;

    function defineEvent(...args: any[]): any;

    function definePreCondition(...args: any[]): any;

    function definePreLoadCondition(...args: any[]): any;

    namespace defineAggregate {
        const prototype: {
        };

    }

    namespace defineBusinessRule {
        const prototype: {
        };

    }

    namespace defineCommand {
        const prototype: {
        };

    }

    namespace defineCommandHandler {
        const prototype: {
        };

    }

    namespace defineContext {
        const prototype: {
        };

    }

    namespace defineEvent {
        const prototype: {
        };

    }

    namespace definePreCondition {
        const prototype: {
        };

    }

    namespace definePreLoadCondition {
        const prototype: {
        };

    }

    namespace errors {
        class AggregateConcurrencyError {
            constructor(msg: any, more: any);

        }

        class AggregateDestroyedError {
            constructor(msg: any, more: any);

        }

        class BusinessRuleError {
            constructor(msg: any, more: any);

        }

        class ConcurrencyError {
            constructor(msg: any, more: any);

        }

        class DuplicateCommandError {
            constructor(msg: any, more: any);

        }

        class ValidationError {
            constructor(msg: any, more: any);

        }

        namespace AggregateConcurrencyError {
            namespace prototype {
                const message: string;

                const name: string;

                function toString(): any;

            }

        }

        namespace AggregateDestroyedError {
            namespace prototype {
                const message: string;

                const name: string;

                function toString(): any;

            }

        }

        namespace BusinessRuleError {
            namespace prototype {
                const message: string;

                const name: string;

                function toString(): any;

            }

        }

        namespace ConcurrencyError {
            namespace prototype {
                const message: string;

                const name: string;

                function toString(): any;

            }

        }

        namespace DuplicateCommandError {
            namespace prototype {
                const message: string;

                const name: string;

                function toString(): any;

            }

        }

        namespace ValidationError {
            namespace prototype {
                const message: string;

                const name: string;

                function toString(): any;

            }

        }

    }

}

