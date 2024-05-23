import type { CardIdentifier } from './card-identifier.types';

export default class CardIdentifierApi {
	public static byId(id: string): CardIdentifier {
		return { id };
	}

	public static byIllustrationId(id: string): CardIdentifier {
		return { illustration_id: id };
	}

	public static byMtgoId(id: number): CardIdentifier {
		return { mtgo_id: id };
	}

	public static byMultiverseId(id: number): CardIdentifier {
		return { multiverse_id: id };
	}

	public static byName(name: string, set?: string): CardIdentifier {
		if (set) {
			return { name, set };
		}

		return { name };
	}

	public static byOracleId(id: string): CardIdentifier {
		return { oracle_id: id };
	}

	public static bySet(set: string, collectorNumber: number | string): CardIdentifier {
		return { collector_number: String(collectorNumber), set };
	}
}
